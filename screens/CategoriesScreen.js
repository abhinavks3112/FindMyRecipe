import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
 /* const navigationHandler = (categoryId) => (
    props.navigation.navigate({
        routeName: 'CategoryMeals',
        /* we can pass any data in the form of key value pair in params,
        no limit to the number of data, define any key, give any value.
        These value will be passed to the page we are navigating.
        Eg, we will pass the id of the category we clicked on. */
        // params: { categoryId }
    // }) */
    /* Or props.navigation.navigate('CategoryMeals') */

    /* Push can take us to screens where navigation won't eg
    we cannot to same screen to same screen, it won't be added to stack
    but if we use push then we can, it will add it to the stack.
    Alo, we don't pass ({routeName: 'Categories'}), but just ('Categories')  */
    // props.navigation.push('Categories')

    /* Replace replaces the current component with new component without adding it
    to the cureent stack so now we can't come back to the original screen that has
    been replaced, now the original screen is the one in the current stack
    eg. we may want to replace 'Login Screen' with home screen after login and
    we don't want to come back to the login screen using back button or anything */
    // props.navigation.replace({ routeName: 'CategoryMeals' })
 // );


   /* Item data received in renderGridItem is
    Object {
        "index": 9,
        "item": Category {
            "color": "#47fced",
            "id": "c10",
            "title": "Summer",
        },
        "separators": Object {
            "highlight": [Function highlight],
            "unhighlight": [Function unhighlight],
            "updateProps": [Function updateProps],
        },
    } */

 const renderGridItem = (itemData) => (
 <CategoryGridTile
    title={itemData.item.title}
    color={itemData.item.color}
    onSelect={() => (
    props.navigation.navigate({
        routeName: 'CategoryMeals',
        params: { categoryId: itemData.item.id }
        })
    )}
 />
);

 return (
    /* Item received in KeyExtractor is:
        Category {
          "color": "#f5a442",
          "id": "c3",
          "title": "Hamburgers",
        }
        in newer version, if 'id' is present as key then no need to
        specify keyExtractor
    */
    <FlatList
    numColumns={2}
    data={CATEGORIES}
    renderItem={renderGridItem}
    keyExtractor={(item) => item.id}
    />
 );
};

/* Since every function in javascript is an object, we can add
properties to it, so we will add navigation property to CategoriesScreen,
which is javascript function and essentially an object in java */
CategoriesScreen.navigationOptions = {
    // Styling the Header
    headerTitle: 'Meal Categories'
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;
