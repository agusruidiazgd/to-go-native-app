import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {AQUA} from '../../constants/colors';
import {useSelector} from 'react-redux';
import {StoreInterface} from '../../store/reducers/index';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {user} = useSelector((state: StoreInterface) => state);

  console.log(user);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imgSize} source={require('../../assets/Logo.png')} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AQUA,
    flex: 1,
  },
  imgSize: {
    width: 300,
  },
});
