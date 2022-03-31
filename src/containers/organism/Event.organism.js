import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventFree from '../../components/moleculs/Event.moleculs';
import {useNavigation} from '@react-navigation/native';

const ListEvent = () => {
  const navigation = useNavigation();
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
      <EventFree name="Promo" img={require('../../assets/icon/disc2.jpg')} />
      <EventFree name="Voucher" img={require('../../assets/icon/disc1.jpeg')} />
      <EventFree name="More" img={require('../../assets/icon/more-line.png')} />
    </View>
  );
};

export default ListEvent;

const styles = StyleSheet.create({});
