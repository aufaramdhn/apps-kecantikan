import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';

const BtnCart = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CartScreens')}
      style={props.styles}>
      <RemixIcon name="ri-shopping-cart-line" color={COLORS.black} size="30" />
    </TouchableOpacity>
  );
};

export default BtnCart;

const styles = StyleSheet.create({});
