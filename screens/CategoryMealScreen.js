import React from 'react';
import {
 View,
 FlatList,
 StyleSheet
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = (props) => {
 const renderMealItem = (itemData) => (
        <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {}}
        />
);

 /* We will use getParam to extract params passed from previous screen
 by passing the same key as in previous page */
 const catId = props.navigation.getParam('categoryId');

 const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

 const buttonPressHandler = () => {
     props.navigation.navigate('MealDetail');
 };
 return (
     <View style={styles.screen}>
       <FlatList
       data={displayedMeals}
       renderItem={renderMealItem}
       keyExtractor={(item) => item.id}
       style={{ width: '100%' }}
       />
     </View>
 );
};

/* We can use navigationOptions as a function also instead of a property
which gets automatically called by React Navigation and get passed some
navigationData object. This object can help to access 'navigation' and access
the same data we extracted in component above, without it that would be out of
scope eg. catId above in component.
We do have to return navigationOptions object now, unlike when it was added
as property in categories screen */
CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default CategoryMealScreen;
