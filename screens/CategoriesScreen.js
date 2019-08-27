import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

const CategoriesScreen = (props) => {
 buttonPressHandler = () => (
    props.navigation.navigate({ routeName: 'CategoryMeals' })
    /* Or props.navigation.navigate('CategoryMeals') */
 );

 return (
     <View style={styles.screen}>
         <Text>Categories Screen</Text>
         <Button title="Go To Meals" onPress={buttonPressHandler} />
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

export default CategoriesScreen;
