/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from "react-redux";
import rlm from './app/realm'
import Splash from './app/screens/Splash';
import Login from './app/screens/Login';
import Home from './app/screens/Home';

const Stack = createStackNavigator();

const App: () => React$Node = (props) => {
	useEffect(() => {
      rlm.write(() => {
        rlm.create('Users', {username: 'Rex', password: '1111'});
		rlm.create('Users', {username: 'Ascx', password: '1112'});
		rlm.create('Users', {username: 'Nhgfde', password: '1113'});
      });
	/*return function cleanup() {
    if (rlm !== null && !rlm.isClosed) {
      rlm.close();
    }
	}*/
	}, [])
	
  return (
    // <NavigationContainer>
    //   <Login />
    // </NavigationContainer>
	
		<NavigationContainer>
    		<Stack.Navigator headerMode='none'>
				{props.isSignedIn ? (
					<>
						<Stack.Screen name="Home" component={Home} />
					</>
				) : (
						<Stack.Screen name="Login" component={Login} />
					)}
    		</Stack.Navigator>
    	</NavigationContainer>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.isSignedIn };
};

export default connect(mapStateToProps)(App);
