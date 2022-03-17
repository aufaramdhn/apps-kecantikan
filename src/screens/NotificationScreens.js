import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';

const Data = [
  {
    id: 1,
    name: 'test',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti praesentium aliquam aliquid laboriosam sequi..',
    time: '2 Bulan yang lalu',
    image: require('../assets/coupon-line.png'),
  },
  {
    id: 2,
    name: 'test',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti praesentium aliquam aliquid laboriosam sequi.',
    time: '2 Bulan yang lalu',
    image: require('../assets/coupon-line.png'),
  },
  {
    id: 3,
    name: 'test',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti praesentium aliquam aliquid laboriosam sequi.',
    time: '2 Bulan yang lalu',
    image: require('../assets/img.jpg'),
  },
  {
    id: 4,
    name: 'test',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti praesentium aliquam aliquid laboriosam sequi.',
    time: '2 Bulan yang lalu',
    image: require('../assets/img.jpg'),
  },
];

const NotificationScreens = ({navigation}) => {
  return (
    <View style={{}}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderColor: COLORS.grey,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Image
                source={item.image}
                style={{width: 80, height: 80, borderRadius: 80 / 2}}
              />
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: COLORS.black,
                  }}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 14, fontWeight: '400', width: '40%'}}>
                  {item.desc}
                </Text>
                <Text style={{fontSize: 14, fontWeight: '400', marginTop: 10}}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreens;

const styles = StyleSheet.create({});
