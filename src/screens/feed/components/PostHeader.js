import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PostHeader = props => {
  const {creator, profilePhoto} = props;

  return (
    <View style={styles.header}>
      <Image style={styles.profile} source={profilePhoto} />
      <Text style={styles.text}>{creator}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 30,
    height: 30,
    borderRadius: 500,
    margin: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    paddingBottom: 40,
  },
});

export default PostHeader;
