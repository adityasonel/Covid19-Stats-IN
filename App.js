console.disableYellowBox = true;

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStatsScreen from './src/screen/HomeStatsScreen';
import DetailedStatsScreen from './src/screen/DetailedStatsScreen';
import AppInfoScreen from './src/screen/AppInfoScreen';

import {APP_SCREEN} from './src/util/Constant';

const Stack = createStackNavigator();

import {Provider} from 'react-redux';
import configureStore from './src/store/Store';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={APP_SCREEN.HOME_STATS_SCREEN}
          headerMode="none">
          <Stack.Screen
            name={APP_SCREEN.HOME_STATS_SCREEN}
            component={HomeStatsScreen}
          />
          <Stack.Screen
            name={APP_SCREEN.DETAILED_STATS_SCREEN}
            component={DetailedStatsScreen}
          />
          <Stack.Screen
            name={APP_SCREEN.APP_INFO_SCREEN}
            component={AppInfoScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
