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
import {FileExcel2Fill} from 'react-native-remix-icon/src/icons';
import COLORS from '../constant/Colors';

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
];

const CartScreens = () => {
  const [status, setStatus] = useState();
  return (
    <View>
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
              <TouchableOpacity
                onPressIn={() => setStatus(item.name, item.all)}>
                <RemixIcon
                  name={
                    status === item.name
                      ? 'ri-checkbox-line'
                      : status === item.all
                      ? 'ri-checkbox-blank-line'
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
        ListFooterComponent={() => (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Footer content</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CartScreens;

const styles = StyleSheet.create({});
