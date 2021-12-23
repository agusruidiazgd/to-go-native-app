import React from 'react';
import {TouchableHighlight, View, Image, Text, StyleSheet} from 'react-native';
import {PRIMARY, AQUA} from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export function BtnSocialLogin({
  icon,
  text,
  action,
}: {
  icon?: string;
  text: string;
  action: any;
}) {
  return (
    <TouchableHighlight
      style={styles.btn}
      underlayColor="#ddd"
      onPress={action}>
      <View style={styles.container}>
        <Icon name={icon} size={24} color={AQUA} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

export function BtnSocialLoginMini({icon, action}: {icon: any; action: any}) {
  return (
    <TouchableHighlight
      style={styles.btnRounded}
      underlayColor="#ddd"
      onPress={action}>
      <Image source={icon} style={styles.roundedContainerIcon} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: PRIMARY,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRounded: {
    marginBottom: 20,
    padding: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    marginLeft: '10%',
  },
  text: {
    color: AQUA,
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'Nunito-SemiBold',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 20,
  },
  roundedContainerIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});
