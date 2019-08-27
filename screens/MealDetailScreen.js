import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Button
 } from 'react-native';

const MealDetailScreen = (props) => {
 return (
     <View style={styles.screen}>
         <Text>MealDetail Screen</Text>
         {/* Difference between 'goBack' and 'pop'(small letter) is that goBack can also be used in other
            types of navigation, while 'pop' only works with Stack Navigator */}
         <Button title="Go Back" onPress={() => props.navigation.goBack()} />
         <Button title="Pop this screen off" onPress={() => props.navigation.pop()} />
          {/* Go back to root of stack */}
         <Button title="Home" onPress={() => props.navigation.popToTop()} />
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

export default MealDetailScreen;