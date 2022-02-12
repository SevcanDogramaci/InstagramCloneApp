import React from 'react';
import {Image, StyleSheet} from 'react-native';
import images from '../../res/images';

const HeaderTitle = () => {
  return <Image source={images.logo} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 120,
    height: 50,
  },
});

export default HeaderTitle;
