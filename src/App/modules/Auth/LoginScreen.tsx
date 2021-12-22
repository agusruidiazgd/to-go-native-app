import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreInterface} from '../../store/reducers/index';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {user} = useSelector((state: StoreInterface) => state);
  const name = 'ümita lover';
  console.log(user);
  return (
    <SafeAreaView>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate({name: 'Params', params: {user: name}})
        }>
        <Text>Params View!</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate({name: 'Flex'})}>
        <Text>Flex View!</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
