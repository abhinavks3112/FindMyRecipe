import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavouritesScreen';
import Colors from '../constants/Colors';

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
   {
    defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor // Font Color}
   }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
            <MaterialIcons
            name="restaurant"
            size={25}
            color={tabInfo.tintColor} // picks up the tint color
            />
            )
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
                <MaterialIcons
                name="favorite"
                size={25}
                color={tabInfo.tintColor}
                />
            )
        }
    }
},
{
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);
