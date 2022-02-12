import {useNavigation} from '@react-navigation/core';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <Icon.Button
      name="search"
      backgroundColor="#fff"
      color="#000"
      onPress={() => navigation.navigate('search')}
    />
  );
};

export default HeaderRight;
