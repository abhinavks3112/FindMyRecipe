import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

const MealList = (props) => {
    const { data, navigation } = props;

    const selectedMealHandler = (mealId) => (navigation.navigate({
        routeName: 'MealDetail',
        params: { mealId }
    }));

    const renderMealItem = (itemData) => (
        <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => selectedMealHandler(itemData.item.id)}
        />
    );
    return (
        <View style={styles.list}>
            <FlatList
            data={data}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
            style={{ width: '100%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;
