import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Transaksi from '../../constant/Transaksi';
import COLORS from '../../constant/Colors';
import RemixIcon from 'react-native-remix-icon';

const ListTransaksi = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: 10,
        marginHorizontal: 20,
      }}>
      <View style={{borderBottomWidth: 1}}>
        <Text style={{marginTop: 20, marginBottom: 10, fontSize: 18}}>
          Transaksi Terakhir
        </Text>
      </View>
      {Transaksi.map(item => {
        return (
          <View
            key={item.id}
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <RemixIcon name="ri-wallet-fill" color="#1d1d1d" size="34" />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '87%',
                  marginLeft: 10,
                }}>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#1d1d1d',
                      fontWeight: '400',
                    }}>
                    {item.payment}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1d1d1d',
                      fontWeight: '400',
                    }}>
                    {item.date}
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#1d1d1d',
                      fontWeight: '400',
                    }}>
                    {item.price}
                  </Text>
                  <Text
                    style={
                      item.review === 'Berhasil'
                        ? {color: 'green'}
                        : {color: 'red'}
                    }>
                    {item.review}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ListTransaksi;

const styles = StyleSheet.create({});
