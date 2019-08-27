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
    // props.navigation.push('Categories')
    // props.navigation.navigate({ routeName: 'CategoryMeals' })
    /* Replace replaces the current component with new component without adding it
    to the cureent stack so now we can't come back to the original screen that has
    been replaced, now the original screen is the one in the current stack
    eg. we may want to replace 'Login Screen' with home screen after login and 
    we don't want to come back to the login screen using back button or anything */
    props.navigation.replace({ routeName: 'CategoryMeals' })
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
