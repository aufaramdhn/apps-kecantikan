import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';

const Data = [
  {
    id: 1,
    name: 'facial cleanser',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
  },
  {
    id: 2,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
  },
  {
    id: 3,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
  },
  {
    id: 4,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
  },
  {
    id: 5,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
  },
];

const CartScreens = item => {
  const navigation = useNavigation();
  const [status, setStatus] = useState();
  const [selectAll, setSelectAll] = useState();
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: COLORS.grey,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: COLORS.lightgrey,
        }}>
        <Text style={{fontSize: 16, color: COLORS.black}}>Produk Pilihan</Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderColor: COLORS.grey,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity onPressIn={() => setStatus(item.id)}>
                <RemixIcon
                  name={
                    status === item.id
                      ? 'ri-checkbox-line'
                      : 'ri-checkbox-blank-line'
                  }
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <Image source={item.Image} style={{width: 70, height: 70}} />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: COLORS.black,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: COLORS.primary,
                  }}>
                  {item.desc}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: COLORS.black,
                  }}>
                  Variasi: {item.var}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'red',
                    }}>
                    {item.Price}
                  </Text>
                  <Text>1x</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginHorizontal: 20,
                marginTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  borderRadius: 25,
                  justifyContent: 'space-between',
                  width: '25%',
                }}>
                <RemixIcon
                  name="ri-indeterminate-circle-line"
                  color={COLORS.primary}
                />
                <Text>01</Text>
                <RemixIcon name="ri-add-circle-line" color={COLORS.primary} />
              </View>
            </View>
          </View>
        )}
      />
      <View
        style={{
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: COLORS.grey,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{marginRight: 5}}>
              <RemixIcon name="ri-checkbox-blank-line" color={COLORS.grey} />
            </TouchableOpacity>
            <Text>Voucher</Text>
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Masukan Kode Voucher</Text>
            <RemixIcon name="ri-arrow-right-s-line" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{marginRight: 5}}
              onPress={() => setSelectAll(Data, item.select)}>
              <RemixIcon
                name={
                  selectAll === item.select
                    ? 'ri-checkbox-line'
                    : 'ri-checkbox-blank-line'
                }
                color={COLORS.grey}
              />
            </TouchableOpacity>
            <Text>Semua</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: 8,
              }}>
              <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
                Subtotal Rp. 1.444.000
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.primary,
                  fontWeight: 'bold',
                }}>
                Dapatkan Poin (150)
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                paddingVertical: 15,
                paddingHorizontal: 20,
              }}
              onPress={() => navigation.navigate('ShoppingBagScreens')}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                Checkout (2)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreens;

const styles = StyleSheet.create({});
