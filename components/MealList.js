import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = (props) => {
    const { data, navigation } = props;

    /* React hooks should only be used at root level and not inside nested if, function, etc */
    const favouriteMeal = useSelector((state) => state.meals.favouriteMeals);
    const selectedMealHandler = (mealId, mealTitle, isFavourite) => (navigation.navigate({
        routeName: 'MealDetail',
        params: { mealId, mealTitle, isFavourite }
    }));

    const renderMealItem = (itemData) => {
        /* some is a built in js function which returns boolean,
         on whether something matched or not */
        const isFavourite = favouriteMeal.some((meal) => meal.id === itemData.item.id);
        return (
            <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={
                () => selectedMealHandler(itemData.item.id, itemData.item.title, isFavourite)
            }
            />
        );
    };
    return (
        <View style={styles.list}>
            <FlatList
            data={data}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
            style={{ width: '100%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;
