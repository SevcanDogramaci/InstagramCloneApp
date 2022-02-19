/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import SearchBar from './components/SearchBar';
import {getSearchedPosts} from '../../api/mockAPI';
import Post from './components/PostContent';
import debounce from 'lodash.debounce';
import {VIEWABILITY_CONFIG} from '../config/ViewabilityConfig';
import CustomActivityIndicator from '../components/CustomActivityIndicator';
import {FLATLIST_CONFIG} from '../config/FlatListConfig';

const gridItemDimension = Math.floor(Dimensions.get('window').width) / 2;
const numOfColumns =
  Math.floor(Dimensions.get('window').width) / gridItemDimension;

const SearchScreen = () => {
  const [searchInfo, setSearchInfo] = useState({
    posts: [],
    pausedStates: [],
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
      setSearchInfo({
        posts,
        pausedStates: new Array(posts.length).fill(true),
        loading: false,
      }),
    );
  };

  const debouncedgetSearchedItems = useCallback(
    debounce(getSearchedItems, 500),
    [],
  );
  const getGridItemKey = useCallback(item => item.id, []);
  const renderGridItem = ({item}) => {
    return (
      <Post
        src={item.src || item.firstImgSrc}
        type={item.type}
        width={gridItemDimension}
        paused={searchInfo.pausedStates[item.id]}
      />
    );
  };

  const handleViewableItemsChanged = useCallback(({changed, viewableItems}) => {
    setSearchInfo(prevSearchInfo => {
      let pausedStatesCopy = [...prevSearchInfo.pausedStates];

      changed.forEach(viewToken => {
        const {item, isViewable} = viewToken;

        if (isViewable) {
          pausedStatesCopy[item.id] = false;
        } else {
          pausedStatesCopy[item.id] = true;
        }
      });
      return {...prevSearchInfo, pausedStates: pausedStatesCopy};
    });
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar onSearchItemChange={debouncedgetSearchedItems} />
      {searchInfo.loading && <CustomActivityIndicator />}
      {!searchInfo.loading && (
        <FlatList
          keyExtractor={getGridItemKey}
          data={searchInfo.posts}
          renderItem={renderGridItem}
          viewabilityConfig={VIEWABILITY_CONFIG}
          initialNumToRender={FLATLIST_CONFIG.initialNumToRender}
          maxToRenderPerBatch={FLATLIST_CONFIG.maxToRenderPerBatch}
          removeClippedSubviews={FLATLIST_CONFIG.removeClippedSubviews}
          windowSize={FLATLIST_CONFIG.windowSize}
          extraData={searchInfo.pausedStates}
          onViewableItemsChanged={handleViewableItemsChanged}
          numColumns={numOfColumns}
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
