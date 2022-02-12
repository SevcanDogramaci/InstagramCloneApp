import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = props => {
  const {onSearchItemChange} = props;

  return (
    <>
      <View style={styles.container}>
        <Icon name="search" size={18} style={styles.icon} color="#A3A5A7" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#A3A5A7"
          onChangeText={onSearchItemChange}
        />
      </View>
      <View style={styles.separator} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDEF',
    margin: '1%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  icon: {
    marginHorizontal: '1%',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#000',
  },
  separator: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 0.5,
  },
});

export default SearchBar;
