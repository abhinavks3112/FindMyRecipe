import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = (props) => {
  const { navigation } = props;

 /* We will use getParam to extract params passed from previous screen
 by passing the same key as in previous page */
 const catId = navigation.getParam('categoryId');

 /* Kind of an alternative to mapStateToProps, returns a single value
 More details: https://dev.to/gsto/new-redux-hooks-a-before-and-after-comparison-are-they-better-loj */
 const availableMeals = useSelector((state) => state.meals.filteredMeals);

 const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

 if (displayedMeals.length === 0) {
    return (
        <View style={styles.screen}>
            <DefaultText>No meals found. Maybe check your filters!!</DefaultText>
        </View>
    );
 }
 return (
    <MealList
     data={displayedMeals}
     navigation={navigation}
    />
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
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
