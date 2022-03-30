import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../constant/Colors';
import RemixIcon from 'react-native-remix-icon';

const FooterCart = () => {
  const navigation = useNavigation();
  const [selectAll, setSelectAll] = useState();
  return (
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
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
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
  );
};

export default FooterCart;

const styles = StyleSheet.create({});
