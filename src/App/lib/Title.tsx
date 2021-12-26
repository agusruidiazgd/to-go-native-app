import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TEXT, PRIMARY_DARK} from '../constants/colors';

function Title({title = '', color = TEXT}: {title: string; color?: string}) {
  return (
    <>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Nunito-ExtraBold',
  },
});
