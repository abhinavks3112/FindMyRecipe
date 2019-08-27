import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
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
    return (
    <View style={styles.gridItem}>
        <Text>
            {itemData.item.title}
        </Text>
    </View>
    );
};

const CategoriesScreen = (props) => {
 buttonPressHandler = () => (

    props.navigation.navigate({ routeName: 'CategoryMeals' })
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
    keyExtractor={(item, index) => item.id}
    />
 );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;
