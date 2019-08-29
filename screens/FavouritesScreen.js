import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
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

FavouritesScreen.navigationOptions = (navData) => ({
        headerTitle: 'Your Favourites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                title="Menu"
                iconName="menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
                />
            </HeaderButtons>
        )
});

export default FavouritesScreen;
