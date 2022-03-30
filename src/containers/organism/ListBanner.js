import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const ListBanner = () => {
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <Swiper
        autoplay
        autoplayTime={5}
        height={200}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#fff',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/banner.jpg')}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/banner1.jpg')}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default ListBanner;

const styles = StyleSheet.create({});
