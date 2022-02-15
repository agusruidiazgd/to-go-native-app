import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {StoreInterface} from '../../store/reducers/index';
import {AQUA, PRIMARY_DARK} from '../../constants/colors';
import BtnPrimary from '../../lib/BtnPrimary';
import Txt from '../../lib/Txt';
import Title from '../../lib/Title';
import ModalHome from './components/ModalHome';
import {MyTabs} from '../../navigation';
import Spacer from '../../lib/Spacer';

const HomeScreen = () => {
  const {user} = useSelector((state: StoreInterface) => state);
  const {home} = useSelector((state: StoreInterface) => state);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.title}>
          <Title title={`Hi ${user.firstName}, welcome!`} />
        </View>
        <View style={styles.imgcontainer}>
          <Image source={require('../../assets/Landscape.png')} />
        </View>
        <Spacer axis="vertical" size={50} />
        <View style={styles.textContainer}>
          <Txt style={styles.text}>Here start your next adventure,</Txt>
          <Txt style={styles.text}>Are you ready?</Txt>
        </View>
        <Spacer axis="vertical" size={50} />
        <View style={styles.btnContainer}>
          <BtnPrimary
            text="GET STARTED"
            action={() => {
              navigation.navigate('MenuHome');
            }}
          />
        </View>

        <ModalHome modalVisible={home.modalBoarding} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
  title: {
    flex: 2,
  },
  imgcontainer: {
    flex: 4,
  },
  textContainer: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: PRIMARY_DARK,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  btnContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    color: AQUA,
  },
});
