import {StyleSheet, Text, View, Image, ScrollView, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import COLORS from '../constant/Colors';
import ListVoucherOngkir from '../containers/organism/ListVoucherOngkir';
import ListVoucherCashback from '../containers/organism/ListVoucherCashback';

const datadummy = [
  {
    id: 1,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 2,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 3,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 4,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 5,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
];
const datadummmy = [
  {
    id: 1,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 2,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 3,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 4,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
  {
    id: 5,
    desc: 'Cashback 5% s/d 50RB',
    exp: '03.04.22',
  },
];

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
      <View>
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: '55%',
            padding: 10,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            VOUCHER GRATIS ONGKIR
          </Text>
        </View>
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          VOUCHER GRATIS ONGKIR HARIAN
        </Text>
        <ListVoucherOngkir />
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: '65%',
            paddingHorizontal: 2,
            paddingVertical: 10,
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            PULSA, TAGIHAN & HIBURAN
          </Text>
        </View>
        <ListVoucherCashback data={datadummy} icon="ri-smartphone-line" />
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: '65%',
            paddingHorizontal: 2,
            paddingVertical: 10,
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            PULSA, TAGIHAN & HIBURAN
          </Text>
        </View>
        <ListVoucherCashback data={datadummmy} icon="ri-t-shirt-fill" />
      </View>
    </ScrollView>
  );
};

export default VoucherScreens;

const styles = StyleSheet.create({});
