import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Face from '../../constant/DataFace';

const ListSkincare2 = () => {
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
          </View>
        );
      })}
    </View>
  );
};

export default ListSkincare2;

const styles = StyleSheet.create({});
