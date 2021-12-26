import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TEXT, PRIMARY_DARK} from '../constants/colors';

function Txt({text = '', children, style = {}}: any) {
  return (
    <>
      <Text style={{...styles.text, ...style}}>{text || children}</Text>
    </>
  );
}

export default Txt;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    textAlign: 'center',
    color: TEXT,
  },
});
