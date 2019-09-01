import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = (props) => {
    const { navigation } = props;
    const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
    if (favouriteMeals.length === 0 || !favouriteMeals) {
        return (
            <View style={styles.screen}>
                <DefaultText>No favourite meals found. Start adding some!!</DefaultText>
            </View>
        );
    }
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouritesScreen;
