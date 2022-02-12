/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import SearchBar from './components/SearchBar';
import {getSearchedPosts} from '../../api/mockAPI';
import PostContent from '../components/PostContent';
import debounce from 'lodash.debounce';
import CustomActivityIndicator from '../components/CustomActivityIndicator';

const renderPost = (item, width) => {
  return (
    <PostContent
      src={item.src || item.firstImgSrc}
      type={item.type}
      width={width}
    />
  );
};

const SearchScreen = () => {
  const [searchInfo, setSearchInfo] = useState({
    posts: [],
    loading: false,
  });

  // Stop the invocation of the debounced function
  // after unmounting
  useEffect(() => {
    return function cleanup() {
      debouncedgetSearchedItems.cancel();
    };
  }, []);

  const getSearchedItems = searchedItem => {
    setSearchInfo({...searchInfo, loading: true});
    getSearchedPosts(searchedItem).then(posts =>
      setSearchInfo({posts, loading: false}),
    );
  };

  const debouncedgetSearchedItems = useCallback(
    debounce(getSearchedItems, 500),
    [],
  );
  const getGridItemKey = useCallback(item => item.id, []);
  const gridItemDimension = Math.floor(Dimensions.get('window').width) / 3;
  const renderGridItem = useCallback(
    ({item}) => renderPost(item, gridItemDimension),
    [gridItemDimension],
  );

  return (
    <View style={styles.container}>
      <SearchBar onSearchItemChange={debouncedgetSearchedItems} />
      {searchInfo.loading && <CustomActivityIndicator />}
      {!searchInfo.loading && (
        <FlatGrid
          style={styles.grid}
          itemDimension={gridItemDimension}
          spacing={0}
          data={searchInfo.posts}
          renderItem={renderGridItem}
          keyExtractor={getGridItemKey}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  grid: {
    flex: 1,
    width: '100%',
  },
});

export default SearchScreen;
