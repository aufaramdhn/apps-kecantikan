import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';
import {CartStyles} from '../styles/CartStyles';
import ListCart from '../containers/organism/ListCart';
import FooterCart from '../containers/organism/FooterCart.organism';

const CartScreens = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={CartStyles.ContainerHeader}>
        <Text style={{fontSize: 16, color: COLORS.black}}>Produk Pilihan</Text>
      </View>
      <ListCart />
      <FooterCart />
    </View>
  );
};

export default CartScreens;

const styles = StyleSheet.create({});
