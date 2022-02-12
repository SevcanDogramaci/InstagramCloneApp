import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

const CustomVideo = props => {
  const {src, width, paused} = props;

  const styles = StyleSheet.create({
    video: {
      width: width,
      height: 200,
      backgroundColor: '#e5e5e5',
    },
  });

  return (
    <Video
      paused={paused}
      source={src}
      resizeMode={'cover'}
      style={styles.video}
      repeat
      poster={
        'https://cutewallpaper.org/21/loading-gif-transparent-background/How-to-display-waiting-gifs-with-transparency-without-the-.gif'
      }
      posterResizeMode={'center'}
    />
  );
};

export default CustomVideo;
