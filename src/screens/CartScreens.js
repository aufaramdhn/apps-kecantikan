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
import {CartStyles} from '../styles/CartStyles';

const Data = [
  {
    id: 1,
    name: 'facial cleanser',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 2,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 3,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 4,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 5,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/onboard1.jpg'),
    select: 'all',
    selected: false,
  },
];

const CartScreens = item => {
  const navigation = useNavigation();
  const [status, setStatus] = useState();
  const [selectAll, setSelectAll] = useState();
  const [selectedItem, setSelectItem] = useState(false);
  return (
    <View style={{height: '100%'}}>
      <View style={CartStyles.ContainerHeader}>
        <Text style={{fontSize: 16, color: COLORS.black}}>Produk Pilihan</Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={CartStyles.ContainerCart}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setStatus(item.id);
                  setSelectItem(item.selected);
                  setSelectItem(!selectedItem);
                  console.log(selectedItem);
                }}>
                <RemixIcon
                  name={
                    status === item.id && selectedItem === true
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
            <View style={CartStyles.ContainerBtnAddSub}>
              <View style={CartStyles.BtnAddSub}>
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
        <View style={CartStyles.ContainerFooter}>
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
