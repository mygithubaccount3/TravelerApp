import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import {createStackNavigator, createAppContainer} from 'react-navigation';
import App from './App';
import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
