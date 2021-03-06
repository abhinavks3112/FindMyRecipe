import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => (
        <HeaderButton
        {...props}
        IconComponent={MaterialIcons}
        iconSize={24}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
);

export default CustomHeaderButton;
