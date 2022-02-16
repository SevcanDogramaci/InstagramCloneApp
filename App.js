import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/login/LoginScreen';
import FeedScreen from './src/screens/feed/FeedScreen';
import HeaderRight from './src/screens/components/HeaderRight';
import HeaderTitle from './src/screens/components/HeaderTitle';
import SearchScreen from './src/screens/search/SearchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{
            headerBackVisible: true,
            headerTitle: props => <HeaderTitle {...props} />,
            headerRight: props => <HeaderRight {...props} />,
          }}
        />
        <Stack.Screen
          name="search"
          component={SearchScreen}
          options={{
            headerTitle: props => <HeaderTitle {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
