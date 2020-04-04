/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from "react-redux";
import rlm from './app/allSchemas'
import Splash from './app/screens/Splash';
import Login from './app/screens/Login';
import Home from './app/screens/Home';

const Stack = createStackNavigator();

const App: () => React$Node = (props) => {
	const [isLoaded, setLoadingState] = useState(false);
	
	useEffect(() => {
		setTimeout(() => {
			setLoadingState(true);
		}, 3000)
	}, [])
	
	return (
		<NavigationContainer>
    		<Stack.Navigator headerMode='none'>
				{isLoaded ?
					props.isSignedIn ? (
						<>
							<Stack.Screen name="Home" component={Home} />
						</>
					) : (
							<Stack.Screen name="Login" component={Login}  options={{animationTypeForReplace: 'pop'}}/>
					) : (
						<Stack.Screen name="Splash" component={Splash} />
					)}
    		</Stack.Navigator>
    	</NavigationContainer>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.isSignedIn };
};

export default connect(mapStateToProps)(App);
