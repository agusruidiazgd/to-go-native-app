import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {AQUA} from '../../constants/colors';
import Spacer from '../../lib/Spacer';
import BtnPrimary from '../../lib/BtnPrimary';

const MenuScreen = () => {
  const navigation = useNavigation();
  
  const menu = [
    {cta: 'START NEW TRIP', route: 'NewTrip'},
    {cta: 'MY TRIPS', route: 'MyTrips'},
    {cta: 'SOCIAL', route: 'Social'},
    {cta: 'SETTINGS', route: 'Settings'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Spacer axis="vertical" size={50} />
        <View style={styles.imgcontainer}>
          <Image source={require('../../assets/homeBoarding_3.png')} />
        </View>
        <Spacer axis="vertical" size={50} />
        {menu.map(elem => (
          <BtnPrimary
            text={elem.cta}
            action={() => {
              navigation.navigate(elem.route);
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AQUA,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  imgcontainer: {
    
  },
});
