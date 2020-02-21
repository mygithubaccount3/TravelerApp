import React from 'react';
import {
  /*SafeAreaView,*/
  StyleSheet,
  /*ScrollView,*/
  View,
  Text,
  /*StatusBar,*/
  ImageBackground,
  Image,
} from 'react-native';

import {
  /*Header,
    LearnMoreLinks,*/
  Colors,
  /*DebugInstructions,
    ReloadInstructions,*/
} from 'react-native/Libraries/NewAppScreen';

const Splash: () => React$Node = () => {
  return (
    <>
      {/*<StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />*/}
      {/*{global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}*/}
      <View style={styles.body}>
        <View style={styles.mainScreen}>
          <Image
            source={require('../img/background.png')}
            style={styles.imageBackground}
          />
          <View style={styles.overlay} />
          <Image source={require('../img/plane.png')} style={styles.logo} />
          <Text style={styles.description}>
            Travellers from across the globe.
          </Text>

          {/*<Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>*/}
        </View>

        {/*<View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>*/}
        {/*<LearnMoreLinks />*/}
      </View>
      {/*</ScrollView>
      </SafeAreaView>*/}
    </>
  );
};

const styles = StyleSheet.create({
  /*scrollView: {
      backgroundColor: Colors.lighter,
    },*/
  /*engine: {
      position: 'absolute',
      right: 0,
    },*/
  body: {
    backgroundColor: Colors.white,
    position: 'relative',
  },
  /*sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },*/
  mainScreen: {
    /*flex: 1,*/
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  description: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    lineHeight: 22,
    color: Colors.white,
    letterSpacing: -0.164362,
    opacity: 0.7,
  },
  logo: {
    width: 66,
    height: 63,
    marginBottom: 20,
  },
});

export default Splash;
