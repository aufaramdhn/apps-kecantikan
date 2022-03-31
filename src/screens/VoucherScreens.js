import {StyleSheet, Text, View, Image, ScrollView, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import COLORS from '../constant/Colors';
import ListVoucherOngkir from '../containers/organism/ListVoucherOngkir';
import ListVoucherCashback from '../containers/organism/ListVoucherCashback';

const VoucherScreens = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <ScrollView>
      <Image
        source={require('../assets/banner/banner.jpg')}
        style={{margin: 20, width: '90%', height: 100}}
      />
      <View style={{marginHorizontal: 20}}>
        <View
          style={{backgroundColor: COLORS.primary, width: '55%', padding: 10}}>
          <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
            VOUCHER GRATIS ONGKIR
          </Text>
        </View>
        <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
          VOUCHER GRATIS ONGKIR HARIAN
        </Text>
        <ListVoucherOngkir />
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: '65%',
            paddingHorizontal: 2,
            paddingVertical: 10,
            paddingLeft: 20,
            marginVertical: 10,
          }}>
          <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
            PULSA, TAGIHAN & HIBURAN
          </Text>
        </View>
      </View>
      <ListVoucherCashback />
    </ScrollView>
  );
};

export default VoucherScreens;

const styles = StyleSheet.create({});
