import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Button
} from 'react-native';

const CategoryMealScreen = (props) => {
 buttonPressHandler = () => {
     props.navigation.navigate('MealDetail');
 };
 return (
     <View style={styles.screen}>
         <Text>CategoryMeal Screen</Text>
         <Button title="Meal Details Screen" onPress={buttonPressHandler} />
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
