import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

const CategoriesScreen = (props) => {
 buttonPressHandler = () => (
    /* Push can take us to screens where navigation won't eg
    we cannot to same screen to same screen, it won't be added to stack
    but if we use push then we can, it will add it to the stack.
    Alo, we don't pass ({routeName: 'Categories'}), but just ('Categories')  */
    props.navigation.push('Categories')
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
