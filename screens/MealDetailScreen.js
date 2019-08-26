import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = () => {
 return (
     <View style={styles.screen}>
         <Text>MealDetail Screen</Text>
     </View>
 );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default MealDetailScreen;