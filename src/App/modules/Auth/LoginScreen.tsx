import React, {useState} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {AQUA, DARK_GRAY, PRIMARY} from '../../constants/colors';
import {useSelector} from 'react-redux';
import {StoreInterface} from '../../store/reducers/index';
import {useNavigation} from '@react-navigation/core';
import InputForm from '../../lib/InputForm';
import {BtnSocialLogin} from '../../lib/BtnSocialLogin'


const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const {user} = useSelector((state: StoreInterface) => state);
  const [text, setText] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imgSize} source={require('../../assets/Logo.png')} />
      <View style={styles.inputContainer}>
        <InputForm
          placeholder="Email"
          keyboardType="email-address"
          autoCompleteType="email"
        />
        <InputForm placeholder="Password" secureTextEntry />
        <BtnSocialLogin text="Login"/>
        <Text>Or</Text>
        <BtnSocialLogin text="Login with Facebook" icon="facebook-square" />
        <BtnSocialLogin text="Login with Google" icon="google" />
        <BtnSocialLogin text="Login with Email" icon="envelope" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AQUA,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  imgSize: {
    width: 300,
  },
  inputContainer: {
    width: '100%',
  },
});
