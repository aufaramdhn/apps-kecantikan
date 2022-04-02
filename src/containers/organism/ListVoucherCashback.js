import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../../constant/Colors';

const ListVoucherCashback = props => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        style={{paddingHorizontal: 20}}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
              marginRight: 20,
              elevation: 8,
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                backgroundColor: COLORS.primary,
                paddingVertical: 5,
                paddingHorizontal: 4,
                alignItems: 'center',
              }}>
              <RemixIcon name={props.icon} size="30" color={COLORS.white} />
              <Text
                lineBreakMode="2"
                style={{
                  color: COLORS.white,
                  textAlign: 'center',
                  fontSize: 10,
                }}>
                Pulsa &{'\n'}Paket data
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: COLORS.black,
                    width: '60%',
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}>
                  {item.desc}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginVertical: 5,
                  }}>
                  <RemixIcon name="ri-calendar-2-line" size="18" />
                  <Text style={{fontSize: 10, marginRight: 10}}>
                    {item.exp}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListVoucherCashback;

const styles = StyleSheet.create({});
