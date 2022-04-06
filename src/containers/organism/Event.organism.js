import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventFree from '../../components/moleculs/Event.moleculs';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const ListEvent = () => {
  const All = [
    {
      id: 1,
      name: 'Toothpaste',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/tooth-1.jpg'),
    },
    {
      id: 2,
      name: 'Toothpaste',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/tooth-2.jpg'),
    },
    {
      id: 3,
      name: 'Toothpaste',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/tooth-3.jpg'),
    },
    {
      id: 4,
      name: 'Toothpaste',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/tooth-4.jpg'),
    },
    {
      id: 5,
      name: 'Toothpaste',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/tooth-5.jpg'),
    },
    {
      id: 6,
      name: 'Toothpaste',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/tooth-6.jpg'),
    },
    {
      id: 7,
      name: 'Hair Oil',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/hair-1.jpg'),
    },
    {
      id: 8,
      name: 'Shampoo',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/hair-2.jpg'),
    },
    {
      id: 9,
      name: 'Hair Serum',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/hair-3.jpg'),
    },
    {
      id: 10,
      name: 'Hair Oil',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/hair-4.jpg'),
    },
    {
      id: 11,
      name: 'Conditioner',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/hair-5.jpg'),
    },
    {
      id: 12,
      name: 'Shampoo',
      desc: 'Elemis superfood',
      price: 'Rp.450.000',
      image: require('../../assets/product/hair-6.jpg'),
    },
  ];

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onHandleChange = dataLempar => {
    dispatch({
      type: 'SET_DATA_PROMO',
      inputValue: dataLempar,
    });
  };
  const onHandleNamePage = dataLempar => {
    dispatch({
      type: 'SET_NAME_PAGE',
      inputValue: dataLempar,
    });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 20,
      }}>
      <EventFree
        name="Gratis Ongkir"
        img={require('../../assets/icon/disc3.png')}
        onPress={() => navigation.navigate('VoucherScreens')}
      />
      <EventFree
        name="Promo"
        img={require('../../assets/icon/disc2.jpg')}
        onPress={() => {
          onHandleChange(All);
          navigation.navigate('PromoScreens');
          onHandleNamePage(null);
        }}
      />
      <EventFree name="Voucher" img={require('../../assets/icon/disc1.jpeg')} />
      <EventFree name="More" img={require('../../assets/icon/more-line.png')} />
    </View>
  );
};

export default ListEvent;

const styles = StyleSheet.create({});
