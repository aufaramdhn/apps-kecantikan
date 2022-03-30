import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';

const BtnRightChat = ({navigation}) => {
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
        <RemixIcon name="ri-vidicon-fill" color="#1d1d1d" size="28" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <RemixIcon name="ri-phone-fill" color="#1d1d1d" size="28" />
      </TouchableOpacity>
    </View>
  );
};

export default BtnRightChat;

const styles = StyleSheet.create({});
