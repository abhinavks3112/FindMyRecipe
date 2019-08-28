import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Button
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = (props) => {
 /* We will use getParam to extract params passed from previous screen
 by passing the same key as in previous page */
 const catId = props.navigation.getParam('categoryId');
 const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
 const buttonPressHandler = () => {
     props.navigation.navigate('MealDetail');
 };
 return (
     <View style={styles.screen}>
         <Text>CategoryMeal Screen</Text>
         <Text>{selectedCategory.title}</Text>
         <Button title="Go to Category Details Screen" onPress={buttonPressHandler} />
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
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
