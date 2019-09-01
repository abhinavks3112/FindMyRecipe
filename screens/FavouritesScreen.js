import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = (props) => {
    const { navigation } = props;
    const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
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
