import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavouritesScreen = (props) => {
    const { navigation } = props;
    const favouriteMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
    return (
        <MealList
        data={favouriteMeals}
        navigation={navigation}
        />
    );
};

FavouritesScreen.navigationOptions = {
    headerTitle: 'Your Favourites'
};

export default FavouritesScreen;
