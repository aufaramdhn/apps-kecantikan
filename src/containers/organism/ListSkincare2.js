import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Face from '../../constant/DataFace';
import {useNavigation} from '@react-navigation/native';

const ListSkincare2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 15}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          marginTop: 30,
          marginBottom: 13,
        }}>
        Terlaris
      </Text>
      {Face.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            style={{flexDirection: 'row', marginVertical: 10}}
            onPress={() => navigation.navigate('DetailScreens', {data: item})}>
            <View>
              <Image
                source={item.image}
                style={{width: 80, height: 80, borderRadius: 15}}
              />
            </View>
            <View style={{justifyContent: 'center', paddingLeft: 10}}>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#545454'}}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '78%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#545454',
                  }}>
                  {item.desc}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: '#545454',
                  }}>
                  {item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ListSkincare2;

const styles = StyleSheet.create({});
