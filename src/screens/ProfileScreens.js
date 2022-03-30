import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import Transaksi from '../constant/Transaksi';
import COLORS from '../constant/Colors';
import ListTransaksi from '../containers/organism/ListTransaksi';
import ListEvent from '../containers/organism/Event.organism';

const ProfileScreens = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightgrey,
      }}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: COLORS.white, elevation: 3}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfileScreens')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.primary,
              marginVertical: 25,
              paddingLeft: 20,
              width: '30%',
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Edit Profile
            </Text>
            <RemixIcon name="ri-arrow-right-s-line" size="28" color="white" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Image
              source={require('../assets/img.jpg')}
              style={{width: 60, height: 60, borderRadius: 25}}
            />
            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 18, color: '#1d1d1d'}}>Your Name</Text>
              <View
                style={{
                  backgroundColor: COLORS.grey,
                  borderRadius: 20,
                  paddingHorizontal: 5,
                }}>
                <Text style={{fontSize: 14, color: 'white'}}>
                  Member Platinum
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('OrderScreens')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RemixIcon
                name="ri-file-list-2-line"
                color={COLORS.primary}
                size="28"
              />
              <Text style={{fontSize: 16, color: '#1d1d1d', marginLeft: 5}}>
                Pesanan Saya
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14}}>lihat Riwayat Pesanan</Text>
              <RemixIcon name="ri-arrow-right-s-line" size="28" />
            </View>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, marginHorizontal: 20}} />
          <ListEvent />
        </View>
        <ListTransaksi />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({});
