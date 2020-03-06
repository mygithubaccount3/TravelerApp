import 'react-native-gesture-handler';
/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import Store from './app/store';
import App from './App';
import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import {name as appName} from './app.json';

function Ap() {
	return (
		<Provider store={Store}>
			<App />
		</Provider>
	)
}

AppRegistry.registerComponent(appName, () => Ap);
