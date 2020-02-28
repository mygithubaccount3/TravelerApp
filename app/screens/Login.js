import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Form from '../components/Form';

const Login: () => React$Node = (props) => {
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };
  let [orientation, setOrientation] = useState(
    isPortrait() ? 'portrait' : 'landscape',
  );
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrientation(isPortrait() ? 'portrait' : 'landscape');
    });

    return function cleanup() {
      Dimensions.removeEventListener('change', () => {
        setOrientation(isPortrait() ? 'portrait' : 'landscape');
      });
    };
  }, []);
  return (
    <View
      style={
        orientation === 'portrait'
          ? styles.loginScreen
          : styles.loginScreenLandscape
      }>
      <Image
        source={require('../img/background.png')}
        style={styles.imageBackground}
      />
      <View style={styles.overlay} />
      <Image source={require('../img/plane.png')} style={styles.logo} />
      <Text style={styles.description}>
        Travellers from across the globe.{orientation}
      </Text>
      <Form orientation={orientation} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    /*flex: 1,*/
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenLandscape: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    /*flex: 1,*/
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.3,
    backgroundColor: Colors.black,
  },
  logo: {
    width: 66,
    height: 63,
    marginBottom: 20,
  },
  description: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    lineHeight: 22,
    color: Colors.white,
    letterSpacing: -0.164362,
    opacity: 0.7,
  },
});

export default Login;
