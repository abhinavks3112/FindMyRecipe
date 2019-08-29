import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
 } from 'react-native';
 import { HeaderButtons, Item } from 'react-navigation-header-buttons';
 import { MEALS } from '../data/dummy-data';
 import HeaderButton from '../components/HeaderButton';


const MealDetailScreen = (props) => {
    const { navigation } = props;
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
 return (
     <View style={styles.screen}>
         <Text>{selectedMeal.title}</Text>
         {/* Difference between 'goBack' and 'pop'(small letter) is
         that goBack can also be used in other types of navigation,
         while 'pop' only works with Stack Navigator */}
         <Button title="Go Back" onPress={() => props.navigation.goBack()} />
         <Button title="Pop this screen off" onPress={() => props.navigation.pop()} />
          {/* Go back to root of stack */}
         <Button title="Home" onPress={() => props.navigation.popToTop()} />
     </View>
 );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
            title="Favourites"
            iconName="star"
            onPress={() => console.log('Mark as favorite')}
            />
        </HeaderButtons>
        )
     };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;
