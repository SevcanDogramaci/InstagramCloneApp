import React from 'react';
import CustomImage from '../../components/CustomImage';
import CustomVideo from '../../components/CustomVideo';

const Post = props => {
  const {type, src, width, paused} = props;

  switch (type) {
    case 'photo':
      return <CustomImage src={src} width={width} />;
    case 'video':
      return <CustomVideo src={src} width={width} paused={paused} />;
    default:
      return <></>;
  }
};

export default Post;
