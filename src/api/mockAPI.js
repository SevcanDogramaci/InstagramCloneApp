import posts from './mockData';

const LATENCY_MS = 2000;

async function imitateLatency() {
  return new Promise(resolve => setTimeout(resolve, LATENCY_MS));
}

export async function getPosts() {
  return imitateLatency().then(() => posts);
}

export async function getSearchedPosts(searchedItem) {
  const searchedItemLength = searchedItem.length;

  return imitateLatency().then(() =>
    posts.filter(post => post.id < searchedItemLength),
  );
}
