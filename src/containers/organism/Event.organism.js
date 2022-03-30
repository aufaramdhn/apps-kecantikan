import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventFree from '../../components/moleculs/Event.moleculs';

const ListEvent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 20,
      }}>
      <EventFree name="Gratis Ongkir" img={require('../../assets/disc3.png')} />
      <EventFree name="Promo" img={require('../../assets/disc2.jpg')} />
      <EventFree name="Voucher" img={require('../../assets/disc1.jpeg')} />
      <EventFree name="More" img={require('../../assets/more-line.png')} />
    </View>
  );
};

export default ListEvent;

const styles = StyleSheet.create({});
