import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import CustomImage from '../../components/CustomImage';
import PostHeader from './PostHeader';

const ImagePost = props => {
  const {firstImgSrc, secondImgSrc, creator, profilePhoto} = props.post;
  const contentWidth = Math.floor(Dimensions.get('window').width);

  return (
    <View style={styles.container}>
      <PostHeader creator={creator} profilePhoto={profilePhoto} />
      <Swiper loop={false} height={'100%'} showsPagination loadMinimal>
        <CustomImage src={firstImgSrc} width={contentWidth} />
        <CustomImage src={secondImgSrc} width={contentWidth} />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
});

export default ImagePost;
