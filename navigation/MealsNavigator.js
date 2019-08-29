import React from 'react';
import { Platform } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor // Font Color}
};

const MealsNavigator = createStackNavigator({
    /* All the components mapped here will get a special props passed to them
    from navigation
    First key serve as the initial route
    */
    /* 2 way of setting key value, using screen in object and without */
    Categories: {
        screen: CategoriesScreen
       /*  // Setting set her is at same level as those inside the component,
        // but it wins on screen level
        navigationOptions: {
            headerTitle: 'Meal Categories!!!'
        } */
    },
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen
   },
   { defaultNavigationOptions: defaultStackNavOptions });

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
    },
    { defaultNavigationOptions: defaultStackNavOptions });

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
            <MaterialIcons
            name="restaurant"
            size={25}
            color={tabInfo.tintColor} // picks up the tint color
            />
            ),
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
                <MaterialIcons
                name="favorite"
                size={25}
                color={tabInfo.tintColor}
                />
            ),
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true // active tab icon pops up
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
});

// Only using it to provide the header
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, { defaultNavigationOptions: defaultStackNavOptions });


const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
