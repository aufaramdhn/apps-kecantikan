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

const ShoppingBagScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, paddingHorizontal: 20}}>
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
                    style={{fontSize: 18, fontWeight: '500', color: '#545454'}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      color: '#545454',
                    }}>
                    {item.desc}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
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
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <RemixIcon
                        name="ri-indeterminate-circle-line"
                        size="26"
                        color="#1d1d1d"
                      />
                      <Text style={{color: '#1d1d1d', marginHorizontal: 5}}>
                        2
                      </Text>
                      <RemixIcon
                        name="ri-add-circle-fill"
                        size="26"
                        color="#1d1d1d"
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 30,
            paddingRight: 30,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Promo Code"
            style={{width: '90%', paddingLeft: 20, paddingVertical: 20}}
          />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff'}}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1d1d1d'}}>
              Total Pesanan
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FF3D00'}}>
              Rp. 140.000
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1d1d1d'}}>
              Catatan
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 5,
                marginTop: 15,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentScreens')}
            style={{
              flexDirection: 'row',
              paddingBottom: 5,
              marginTop: 10,
            }}>
            <RemixIcon name="ri-wallet-fill" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '94%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#1d1d1d',
                  marginLeft: 7,
                }}>
                Metode Pembayaran
              </Text>
              <RemixIcon name="ri-arrow-right-s-line" />
            </View>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderColor: COLORS.grey}} />
          <ModalPop />
          <View style={{borderBottomWidth: 1, borderColor: COLORS.grey}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              paddingBottom: 15,
              borderColor: COLORS.grey,
            }}>
            <View>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#1d1d1d',
                }}>
                Subtotal Product
              </Text>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#1d1d1d',
                }}>
                Subtotal Pengiriman
              </Text>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#1d1d1d',
                }}>
                Lainnya
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Rp. 1.400.000
              </Text>
              <Text style={{marginTop: 15, fontSize: 16, fontWeight: '400'}}>
                Rp. 0
              </Text>
              <Text style={{marginTop: 15, fontSize: 16, fontWeight: '400'}}>
                Rp. 0
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 18,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1d1d1d'}}>
              Total Pembayaran
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FF3D00'}}>
              Rp. 1.444.000
            </Text>
          </View>
          <ButtonPrimary
            title="Procesed To Checkout"
            style={{marginVertical: 30}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingBagScreens;

const styles = StyleSheet.create({});
