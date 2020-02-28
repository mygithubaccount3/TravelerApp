import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const PostList: () => React$Node = () => {
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
    <View>
      // <PostItem />
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

export default PostList;
