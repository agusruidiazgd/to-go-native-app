import React from 'react';
import {TouchableHighlight, Text, StyleSheet, View} from 'react-native';
import {PRIMARY, PRIMARY_DARK} from '../constants/colors';

function BtnPrimary({
  children,
  text,
  action,
  background = PRIMARY,
  underlay = PRIMARY_DARK,
  color = '#FFF',
  width = '100%',
  style = null,
}: {
  style?: any;
  children?: any;
  text?: string;
  action?: any;
  background?: string;
  underlay?: string;
  color?: string;
  width?: string | number;
}) {
  return (
    <TouchableHighlight
      underlayColor={underlay}
      onPress={action}
      style={[
        {...styles.btn, ...style},
        {backgroundColor: background, width},
      ]}>
      <View style={styles.content}>
        <Text style={[styles.btnText, {color: color}]}>{text || children}</Text>
      </View>
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
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'Nunito-ExtraBold',
  },
});

export default BtnPrimary;
