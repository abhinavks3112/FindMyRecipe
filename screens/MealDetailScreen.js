import React, { useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
 } from 'react-native';
 import { HeaderButtons, Item } from 'react-navigation-header-buttons';
 import { useSelector, useDispatch } from 'react-redux';

 import HeaderButton from '../components/HeaderButton';
 import DefaultText from '../components/DefaultText';
 import { toggleFavourite } from '../store/action/mealsAction';

const ListItem = (props) => {
    const { children } = props;
    return (
    <View style={styles.listItem}>
        <DefaultText>{children}</DefaultText>
    </View>
    );
};

const MealDetailScreen = (props) => {
    const { navigation } = props;
    const mealId = navigation.getParam('mealId');
    const availableMeals = useSelector((state) => state.meals.meals);
    const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
    const isFavourite = useSelector(
        (state) => state.meals.favouriteMeals.some((meal) => meal.id === mealId)
    );

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId));
    }, [dispatch, mealId]);

    /* Not using the following without useEffect otherwise, it would go in infinite loop
    since change in navigation would cause re-render and then the process will repeat.
    Now, disadvantag is that the title initially will be blank on screen load and then
    suddenly pop out, this is because useEffect will pass this param after the component has
    been fully rendered */
    useEffect(() => {
        // navigation.setParams({ mealTitle: selectedMeal.title });
        navigation.setParams({ toggleFav: toggleFavouriteHandler });
    }, [toggleFavouriteHandler]);

    useEffect(() => {
        navigation.setParams({ isFavourite });
    }, [isFavourite]);

 return (
     <ScrollView>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
                        <DefaultText>
                        {selectedMeal.duration}
                        m
                        </DefaultText>
                        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step) => (
            <ListItem key={step}>{step}</ListItem>))}
     </ScrollView>
 );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    /* Not using it through setParam above, since there will be delay
     in getting data so we will pass it from the previous screen so
     that we can get the data before the component renders */
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFav = navigationData.navigation.getParam('toggleFav');
    const isCurrentMealFavourite = navigationData.navigation.getParam('isFavourite');
    // const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return {
        headerTitle: mealTitle, // selectedMeal.title,
        headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
            title="Favourites"
            iconName={isCurrentMealFavourite ? 'star' : 'star-border'}
            onPress={() => toggleFav()}
            />
        </HeaderButtons>
        )
     };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        marginVertical: 10,
        fontSize: 22,
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;
