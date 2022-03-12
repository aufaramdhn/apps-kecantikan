import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import {ButtonPrimary} from '../components';
import COLORS from '../constant/Colors';
import ShoppingBag from '../constant/ShoppingBag';
import ModalPop from '../components/ModalPop';

const ShoppingBagScreens = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <RemixIcon name="ri-arrow-left-s-line" />
          <Text>Shopping Bag</Text>
          <RemixIcon name="ri-shopping-cart-2-line" />
        </View>
        <View style={{flex: 1}}>
          {ShoppingBag.map(item => {
            return (
              <View
                key={item.id}
                style={{flexDirection: 'row', marginVertical: 10}}>
                <View>
                  <Image
                    source={item.image}
                    style={{width: 80, height: 80, borderRadius: 15}}
                  />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#545454'}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#545454',
                    }}>
                    {item.desc}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '72%',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#545454',
                      }}>
                      {item.price}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <RemixIcon
                        name="ri-subtract-fill"
                        size="26"
                        color="#1d1d1d"
                      />
                      <Text>2</Text>
                      <RemixIcon name="ri-add-fill" size="26" color="#1d1d1d" />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View>
          <View>
            <TextInput />
            <Text>Apply</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Total Pesanan</Text>
          <Text>Rp. 140.000</Text>
        </View>
        <View>
          <Text>Catatan</Text>
          <TextInput />
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <RemixIcon name="ri-wallet-fill" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '94%',
              }}>
              <Text>Metode Pembayaran</Text>
              <RemixIcon name="ri-arrow-right-s-line" />
            </View>
          </View>
          <ModalPop />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text>Subtotal Product</Text>
              <Text>Subtotal Pengiriman</Text>
              <Text>Lainnya</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text>Rp. 1.400.000</Text>
              <Text>Rp. 0</Text>
              <Text>Rp. 0</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Total Pembayaran</Text>
            <Text>Rp. 1.444.000</Text>
          </View>
          <ButtonPrimary title="Procesed To Checkout" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingBagScreens;

const styles = StyleSheet.create({});
