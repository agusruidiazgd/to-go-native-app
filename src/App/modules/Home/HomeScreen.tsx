import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreInterface} from '../../store/reducers/index';
import {AQUA} from '../../constants/colors';
import BtnPrimary from '../../lib/BtnPrimary'
import Txt from '../../lib/Txt'
import Title from '../../lib/Title'

const HomeScreen = () => {
  const {user} = useSelector((state: StoreInterface) => state);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title title={`Hi ${user.firstName}, welcome!`} />
      </View>
      <View>
        <Image source={require('../../assets/Landscape.png')} />
      </View>
      <View>
        <Txt>Here start your next adventure, Are you ready?</Txt>
      </View>
      <BtnPrimary text="GET STARTED" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AQUA,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});
