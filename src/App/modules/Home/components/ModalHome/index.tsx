import {StyleSheet, Text, View, Image} from 'react-native';
import PrimaryModal from '../../../../lib/Modal';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import React, {useState, useRef, useCallback} from 'react';
import BtnPrimary from '../../../../lib/BtnPrimary';
import {PRIMARY_DARK} from '../../../../constants/colors';
import {useDispatch} from 'react-redux';

interface ItemProps {
  image: any;
  text: string;
}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const onBoardingItems = [
  {
    text: 'Choose your destination or ask for a piece of advice.',
    image: require('../../../../assets/homeBoarding_1.png'),
  },
  {
    text: 'Add your flight, accommodation and your plans.',
    image: require('../../../../assets/homeBoarding_2.png'),
  },
  {
    text: 'Share your trips with your friend and the community and start to enjoy.',
    image: require('../../../../assets/homeBoarding_3.png'),
  },
];

const ModalHome = ({modalVisible}: {modalVisible: boolean}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] =
    useState<ItemProps[]>(onBoardingItems);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const setModalVisible = (modal: boolean) => {
    dispatch({type: 'SET_SHOW_MODAL', payload: modal});
  };

  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    return (
      <View key={index} style={styles.boardingItem}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Image source={item.image} />
      </View>
    );
  }, []);

  return (
    <PrimaryModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Carousel
        layout={'default'}
        ref={ref}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />
      <View>
        <Pagination
          dotsLength={onBoardingItems.length}
          activeDotIndex={activeIndex}
          dotColor={PRIMARY_DARK}
          inactiveDotColor={'lightgrey'}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.7}
          carouselRef={ref}
        />
        <BtnPrimary text="SKIP" action={() => setModalVisible(false)} />
      </View>
    </PrimaryModal>
  );
};

export default ModalHome;

const styles = StyleSheet.create({
  itemText: {
    fontSize: 17,
  },
  boardingItem: {
    borderRadius: 5,
    height: 400,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 30,
  },
});
