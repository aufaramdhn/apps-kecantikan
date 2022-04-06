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
import {ProfileStyles} from '../styles/ProfileStyles';

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
            style={ProfileStyles.headerBtn}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Edit Profile
            </Text>
            <RemixIcon name="ri-arrow-right-s-line" size="28" color="white" />
          </TouchableOpacity>
          <View
            style={[
              ProfileStyles.flexDirection,
              {
                paddingHorizontal: 20,
              },
            ]}>
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
            style={ProfileStyles.containerOrder}
            onPress={() => navigation.navigate('OrderScreens')}>
            <View
              style={[ProfileStyles.flexDirection, {justifyContent: 'center'}]}>
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
              style={[ProfileStyles.flexDirection, {justifyContent: 'center'}]}>
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
