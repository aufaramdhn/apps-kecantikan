import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../../constant/Colors';

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

const ListVoucherCashback = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={datadummmy}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginVertical: 10,
            elevation: 8,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: 10,
              paddingHorizontal: 5,
              alignItems: 'center',
            }}>
            <RemixIcon
              name="ri-smartphone-line"
              size="30"
              color={COLORS.white}
            />
            <Text
              lineBreakMode="2"
              style={{color: COLORS.white, textAlign: 'center', fontSize: 10}}>
              Pulsa &{'\n'}Paket data
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text style={{color: COLORS.black}}>{item.desc}</Text>
              <Text>{item.exp}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default ListVoucherCashback;

const styles = StyleSheet.create({});
