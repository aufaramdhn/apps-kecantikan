import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import COLORS from '../../constant/Colors';
import RemixIcon from 'react-native-remix-icon';

const datadummy = [
  {
    id: 1,
    desc: 'Min. Belanja Mulai 30RB',
    exp: 'Berlaku hingga 31.03.2022',
  },
  {
    id: 2,
    desc: 'Min. Belanja Mulai 30RB',
    exp: 'Berlaku hingga 31.03.2022',
  },
  {
    id: 3,
    desc: 'Min. Belanja Mulai 30RB',
    exp: 'Berlaku hingga 31.03.2022',
  },
  {
    id: 4,
    desc: 'Min. Belanja Mulai 30RB',
    exp: 'Berlaku hingga 31.03.2022',
  },
  {
    id: 5,
    desc: 'Min. Belanja Mulai 30RB',
    exp: 'Berlaku hingga 31.03.2022',
  },
  {
    id: 6,
    desc: 'Min. Belanja Mulai 30RB',
    exp: 'Berlaku hingga 31.03.2022',
  },
];

const ListVoucherOngkir = () => {
  return (
    <FlatList
      data={datadummy}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
            marginHorizontal: 20,
            elevation: 8,
            backgroundColor: COLORS.white,
          }}>
          <View style={{backgroundColor: COLORS.primary, padding: 10}}>
            <RemixIcon
              name="ri-shopping-bag-fill"
              size="70"
              color={COLORS.white}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={{color: COLORS.black, width: '50%'}}>
                {item.desc}
              </Text>
              <Text>{item.exp}</Text>
            </View>
            <View style={{backgroundColor: COLORS.primary, padding: 5}}>
              <Text style={{color: COLORS.white, fontSize: 12}}>KLAIM</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default ListVoucherOngkir;

const styles = StyleSheet.create({});
