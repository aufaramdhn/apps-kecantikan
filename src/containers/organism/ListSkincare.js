import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Skincare from '../../constant/DataSkincare';
import COLORS from '../../constant/Colors';
import RemixIcon from 'react-native-remix-icon';
import {useNavigation} from '@react-navigation/native';

const ListSkincare = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Skincare}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#fff',
              margin: 5,
              alignItems: 'center',
              borderRadius: 20,
              elevation: 5,
            }}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailScreens')}>
                <Image
                  source={item.image}
                  style={{width: 165, height: 160, borderRadius: 20}}
                />
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 10,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 14, marginLeft: 10}}>{item.desc}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, marginLeft: 10}}>
                    {item.price}
                  </Text>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 15,
                      width: 30,
                      height: 30,
                      borderRadius: 30 / 2,
                      backgroundColor: COLORS.primary,
                    }}>
                    <RemixIcon
                      name="ri-shopping-bag-line"
                      size="20"
                      color="#fff"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListSkincare;

const styles = StyleSheet.create({});
