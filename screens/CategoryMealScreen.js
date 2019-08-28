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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
