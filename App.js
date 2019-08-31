import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

/* Special package so that react navigation uses optimised native
components provided by android and ios to render screen, to
improve performance */
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducer/mealsReducer';

/* Declare this before anything, just after import to unlock these screens */
useScreens();

const rootReducer = combineReducers({ meal: mealsReducer });

const store = createStore(rootReducer);

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

  return (
  <Provider store={store}>
    <MealsNavigator />
  </Provider>
  );
}
