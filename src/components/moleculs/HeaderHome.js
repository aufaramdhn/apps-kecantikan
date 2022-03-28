import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import SearchHome from './SearchHome';

const HeaderHome = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 30,
        paddingHorizontal: 20,
      }}>
      <View>
        <Image
          source={require('../../assets/img.jpg')}
          style={{width: 60, height: 60, borderRadius: 25}}
        />
      </View>
      <View style={{width: '85%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#1d1d1d'}}>
              Your Name
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                fontStyle: 'italic',
              }}>
              Designer
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
            }}
            onPress={() => navigation.navigate('NotificationScreens')}>
            <RemixIcon
              name="ri-notification-3-line"
              size="28"
              color="#1d1d1d"
            />
          </TouchableOpacity>
        </View>
        <SearchHome />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({});
