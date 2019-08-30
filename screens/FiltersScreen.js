import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

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

const FiltersScreen = () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
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
