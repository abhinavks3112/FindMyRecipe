import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = (props) => {
  const { navigation } = props;

 /* We will use getParam to extract params passed from previous screen
 by passing the same key as in previous page */
 const catId = navigation.getParam('categoryId');

 /* Kind of an alternative to mapStateToProps, returns a single value
 More details: https://dev.to/gsto/new-redux-hooks-a-before-and-after-comparison-are-they-better-loj */
 const availableMeals = useSelector((state) => state.meals.filteredMeals);

 const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

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

export default CategoryMealScreen;
