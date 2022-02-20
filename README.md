# Instagram Clone App

## About the project

A sample instagram clone app with login, feed and search screens. There is no post detail screen implemented. Each post is either a video post or an image post containing 2 images. The following packages are utilized:

* [react-native-keychain](https://www.npmjs.com/package/react-native-keychain) to store username and password safely

* [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) to use search icon

* [react-native-fast-image](https://www.npmjs.com/package/react-native-fast-image) to display images

* [react-native-swiper](https://www.npmjs.com/package/react-native-swiper) to swipe images 

* [react-native-video](https://www.npmjs.com/package/react-native-video) to play videos

## Requirements

- NodeJS v16.14.0
- npm or yarn
- Cocoapods
- Watchman

## How to develop

1. Install mock data folder [here](https://drive.google.com/drive/folders/19au4apOxInDV18uWdN-7K2LtsOWD6CW5?usp=sharing) and put it under `api` folder.

2. Run `yarn install`

3. Run `npx pod-install`

4. Run `yarn android` to run application in Android.

5. Run `yarn ios` to run application in ios.
