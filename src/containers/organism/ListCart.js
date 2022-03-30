import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import RemixIcon from 'react-native-remix-icon';
import {CartStyles} from '../../styles/CartStyles';
import COLORS from '../../constant/Colors';

const Data = [
  {
    id: 1,
    name: 'facial cleanser',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../../assets/image2.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 2,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../../assets/image3.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 3,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../../assets/image2.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 4,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../../assets/image3.jpg'),
    select: 'all',
    selected: false,
  },
  {
    id: 5,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../../assets/image2.jpg'),
    select: 'all',
    selected: false,
  },
];

const ListCart = ({navigation}) => {
  const [status, setStatus] = useState();
  const [selectedItem, setSelectItem] = useState(false);
  return (
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
  );
};

export default ListCart;

const styles = StyleSheet.create({});
