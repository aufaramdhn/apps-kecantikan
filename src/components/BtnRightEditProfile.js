import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';

const BtnRightEditProfile = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate()}
        style={{paddingHorizontal: 10}}>
        <RemixIcon name="ri-shopping-cart-line" color="#1d1d1d" size="28" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <RemixIcon name="ri-notification-3-line" color="#1d1d1d" size="28" />
      </TouchableOpacity>
    </View>
  );
};

export default BtnRightEditProfile;

const styles = StyleSheet.create({});
