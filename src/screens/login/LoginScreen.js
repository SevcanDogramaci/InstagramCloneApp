import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../res/images';
import * as Keychain from 'react-native-keychain';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser() {
    await Keychain.setGenericPassword(username, password);
    navigation.navigate('feed');
  }

  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image} />
      <TextInput
        placeholder={'Username'}
        placeholderTextColor="#8E8E9C"
        style={styles.textInput}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder={'Password'}
        placeholderTextColor="#8E8E9C"
        style={styles.textInput}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        disabled={!(username.length && password.length)}
        onPress={loginUser}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'center',
    height: 100,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#3692E8',
    marginHorizontal: '5%',
    paddingVertical: 15,
    borderRadius: 5,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  textInput: {
    alignSelf: 'stretch',
    marginHorizontal: '5%',
    marginBottom: 5,
    paddingLeft: 10,
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    borderColor: '#DBDBDB',
    borderRadius: 5,
    color: '#000',
    height: 40,
  },
});

export default LoginScreen;
