import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import CustomVideo from '../../components/CustomVideo';
import PostHeader from './PostHeader';

const VideoPost = props => {
  const {post, paused} = props;
  const {src, creator, profilePhoto} = post;

  return (
    <View style={styles.container}>
      <PostHeader creator={creator} profilePhoto={profilePhoto} />
      <CustomVideo src={src} width={styles.content.width} paused={paused} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: Math.floor(Dimensions.get('window').width),
  },
  container: {
    paddingBottom: 40,
  },
});

export default VideoPost;
