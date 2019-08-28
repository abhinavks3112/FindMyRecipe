import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    /* All the components mapped here will get a special props passed to them
    from navigation */
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

export default createAppContainer(MealsNavigator);
