import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
import {getPosts} from '../../api/mockAPI';
import CustomActivityIndicator from '../components/CustomActivityIndicator';
import ImagePost from './components/ImagePost';
import VideoPost from './components/VideoPost';

const CONFIG = {
  itemVisiblePercentThreshold: 50,
};

const FeedScreen = () => {
  const [postsInfo, setPostsInfo] = useState({
    posts: [],
    pausedStates: [],
  });

  useEffect(() => {
    getPosts().then(fetchedPosts => {
      setPostsInfo({
        posts: fetchedPosts,
        pausedStates: new Array(fetchedPosts.length).fill(true),
      });
    });
  }, []);

  const getListItemKey = useCallback(item => item.id, []);
  const renderSeparator = () => <View style={styles.separator} />;
  const renderActivityIndicator = () => <CustomActivityIndicator />;

  const handleViewableItemsChanged = useCallback(({changed, viewableItems}) => {
    setPostsInfo(prevPostsInfo => {
      let pausedStatesCopy = [...prevPostsInfo.pausedStates];

      changed.forEach(viewToken => {
        const {item, isViewable} = viewToken;

        if (isViewable) {
          pausedStatesCopy[item.id] = false;
        } else {
          pausedStatesCopy[item.id] = true;
        }
      });
      return {...prevPostsInfo, pausedStates: pausedStatesCopy};
    });
  }, []);

  const renderListItem = ({item}) => {
    if (item.type === 'photo') {
      return <ImagePost post={item} />;
    } else if (item.type === 'video') {
      return <VideoPost post={item} paused={postsInfo.pausedStates[item.id]} />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={getListItemKey}
        data={postsInfo.posts}
        renderItem={renderListItem}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderActivityIndicator()}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        removeClippedSubviews
        windowSize={3}
        onViewableItemsChanged={handleViewableItemsChanged}
        extraData={postsInfo.pausedStates}
        viewabilityConfig={CONFIG}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Math.floor(Dimensions.get('window').width),
    height: 200,
  },
  separator: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 0.5,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default FeedScreen;
