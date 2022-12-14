/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home';
import CarsScreen from './src/screens/Cars';
import HistoryScreen from './src/screens/History';
import AccountScreen from './src/screens/Account';
import ValidationsScreen from './src/screens/Validations';
import HelpScreen from './src/screens/Help';

export type RootStackParamsList = {
  Home: undefined;
  Cars: undefined;
  History: undefined;
  Account: undefined;
  Validations: undefined;
  Help: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: 'Insta Valet'}}
        />
        <RootStack.Screen
          name="Cars"
          component={CarsScreen}
          options={{headerBackTitle: 'Back'}}
        />
        <RootStack.Screen
          name="History"
          component={HistoryScreen}
          options={{headerBackTitle: 'Back'}}
        />
        <RootStack.Screen
          name="Account"
          component={AccountScreen}
          options={{headerBackTitle: 'Back'}}
        />
        <RootStack.Screen
          name="Validations"
          component={ValidationsScreen}
          options={{headerBackTitle: 'Back'}}
        />
        <RootStack.Screen
          name="Help"
          component={HelpScreen}
          options={{headerBackTitle: 'Back'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
