import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Login from "./Login";



const Home: () => React$Node = () => {
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


      <View style={styles.header}>
        <Image
          source={require('../img/plane.png')}
          style={{width: 25, height: 24}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#589442',
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
