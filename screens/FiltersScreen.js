import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import { setFilters } from '../store/action/mealsAction';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
    const { label, state, onChange } = props;
    return (
    <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch
        value={state}
        onValueChange={onChange}
        thumbColor={Colors.accentColor}
        trackColor={{ true: Colors.primaryColor }}
        />
    </View>
    );
};

const FiltersScreen = (props) => {
    const { navigation } = props;

    const dispatch = useDispatch();

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    /* To make sure saveFilters only updates when state changes, we wrap it in useCallback hook.
    useCallback will make it to be cached by react so that the function is only recreated if its
    dependencies changed. We specify the array of dependencies same as useEffect.
    Callback as the name suggests return an instance of callback function, it doesn't execute it.
    More details: https://stackoverflow.com/questions/54371244/what-is-the-intention-of-using-reacts-usecallback-hook-in-place-of-useeffect
    */
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    /* useEffect takes a function which runs whenever our state change and whenever
    the component re-renders or updates, but if we list the dependencies, then it will
    only run when the dependency's values change.
    useEffect executes whatever is inside unlike useCallback.
    More Details: https://dev.to/devcord/react-hooks-useeffect-usecallback-usememo-3o42
    */
    useEffect(() => {
        /* If we do not destructure the navigation in a new variable and use
        props.navigation then props will become a dependency and any change in props
        value will trigger useEffect, so destructuring is necessay  */
       /*  navigation.setParams({ save: saveFilters });
    }, [saveFilters, navigation]);
    This is an infinite loop because when we set Params in navigation, we change
    naviagtion which we have listed as dependecy so it is re-rendered and then set again,
    which causes infinite loop, so we need to remove it from dependency.
    */
    navigation.setParams({ save: saveFilters });
}, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters Screen</Text>
            <FilterSwitch
            label="Gluten-Free"
            state={isGlutenFree}
            onChange={(newValue) => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
            label="Lactose-Free"
            state={isLactoseFree}
            onChange={(newValue) => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
            label="Vegan"
            state={isVegan}
            onChange={(newValue) => setIsVegan(newValue)}
            />
            <FilterSwitch
            label="Vegetarian"
            state={isVegetarian}
            onChange={(newValue) => setIsVegetarian(newValue)}
            />
        </View>
 );
};

FiltersScreen.navigationOptions = (navData) => ({
        headerTitle: 'Filters',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                title="Menu"
                iconName="menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                title="Save"
                iconName="save"
                // onPress={() => { navData.navigation.getParam('save'); }}
                // This returns a pointer to function, to execute it either do:
                // 1. onPress={() => { navData.navigation.getParam('save')(); }}
                // 2. onPress={navData.navigation.getParam('save')}
                onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
});

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default FiltersScreen;
