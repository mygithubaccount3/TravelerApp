/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './app/screens/Splash';
import Login from './app/screens/Login';
import Home from './app/screens/Home';
import Form from './app/components/Form';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    // <NavigationContainer>
    //   <Login />
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Form" component={Form} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
