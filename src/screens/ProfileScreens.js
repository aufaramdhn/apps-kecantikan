import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import Transaksi from '../constant/Transaksi';
import COLORS from '../constant/Colors';

const ProfileScreens = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightgrey,
      }}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: COLORS.white, elevation: 3}}>
          <View>
            <Text>ProfileScreens</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/img.jpg')}
              style={{width: 60, height: 60, borderRadius: 25}}
            />
            <View>
              <Text>halo</Text>
              <View>
                <Text>halo</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <RemixIcon />
              <Text>halo</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>halo</Text>
              <RemixIcon />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 20,
            }}>
            <View style={{alignItems: 'center'}}>
              <RemixIcon name="ri-wallet-fill" />
              <Text>Belum Bayar</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <RemixIcon name="ri-truck-line" />
              <Text>Dikemas</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <RemixIcon name="ri-archive-line" />
              <Text>Dikirim</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <RemixIcon name="ri-star-fill" />
              <Text>Beri penilaian</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            marginTop: 10,
            marginHorizontal: 20,
          }}>
          <View style={{borderBottomWidth: 1}}>
            <Text style={{marginBottom: 20}}>Transaksi Terakhir</Text>
          </View>
          {Transaksi.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  borderBottomWidth: 1,
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}>
                  <View style={{}}>
                    <Text>{item.payment}</Text>
                    <Text>{item.date}</Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text>{item.price}</Text>
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
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({});
