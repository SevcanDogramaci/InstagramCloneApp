import React from 'react';
import {Image, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const CustomImage = props => {
  const {src, width} = props;

  const styles = StyleSheet.create({
    image: {
      width: width,
      height: 200,
      backgroundColor: '#e5e5e5',
    },
  });

  return (
    <FastImage
      style={styles.image}
      source={{
        uri: Image.resolveAssetSource(src).uri,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default CustomImage;
