import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

/* Special package so that react navigation uses optimised native
components provided by android and ios to render screen, to
improve performance */
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

/* Declare this before anything, just after import to unlock these screens */
useScreens();

const fetchFonts = () => Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <MealsNavigator />;
}
