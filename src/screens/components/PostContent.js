import React from 'react';
import CustomImage from './CustomImage';
import CustomVideo from './CustomVideo';

const PostContent = props => {
  const {type, src, width} = props;

  switch (type) {
    case 'photo':
      return <CustomImage src={src} width={width} />;
    case 'video':
      return <CustomVideo src={src} width={width} />;
    default:
      return <></>;
  }
};

export default PostContent;
