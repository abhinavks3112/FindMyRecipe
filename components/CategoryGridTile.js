import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Platform,
 TouchableNativeFeedback,
 TouchableOpacity
} from 'react-native';

const CategoryGridTile = (props) => {
    const { title, color, onSelect } = props;
    const TouchableEffect = Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <View style={styles.gridItem}>
            <TouchableEffect
            onPress={onSelect}
            style={{ flex: 1 }}
            >
                <View
                style={{ ...styles.tile, ...{ backgroundColor: color } }}
                >
                    <Text style={styles.title} numberOfLines={2}>
                        {title}
                    </Text>
                </View>
            </TouchableEffect>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: (
                    Platform.OS === 'android' && Platform.Version >= 21
                    ? 'hidden'
                    : 'visible'
                  ),
        elevation: 5
    },
    tile: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;
