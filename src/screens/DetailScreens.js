import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import {ButtonPrimary} from '../components';

const DetailScreens = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 20, paddingVertical: 5}}>
        <RemixIcon name="ri-arrow-left-s-line" size="38" style={{zIndex: 1}} />
      </View>
      <View style={{flex: 4}}>
        <Image
          resizeMode="cover"
          source={require('../assets/onboard.jpg')}
          style={{
            width: '100%',
            height: '100%',
            marginTop: -48,
            zIndex: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: -20,
          marginBottom: 20,
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RemixIcon name="ri-leaf-fill" size="38" />
          <Text style={{fontSize: 18, fontWeight: '500', color: '#1d1d1d'}}>
            Flower
          </Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RemixIcon name="ri-leaf-fill" size="38" />
          <Text style={{fontSize: 18, fontWeight: '500', color: '#1d1d1d'}}>
            Natural
          </Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RemixIcon name="ri-leaf-fill" size="38" />
          <Text style={{fontSize: 18, fontWeight: '500', color: '#1d1d1d'}}>
            C+Neutral
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          backgroundColor: COLORS.white,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          paddingHorizontal: 20,
          paddingVertical: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 24, fontWeight: '500', color: '#545454'}}>
              Facial Cleanser
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#545454'}}>
              Elemis superfood facialwash
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <RemixIcon name="ri-star-s-fill" />
              <RemixIcon name="ri-star-s-fill" />
              <RemixIcon name="ri-star-s-fill" />
              <RemixIcon name="ri-star-s-fill" />
              <RemixIcon name="ri-star-half-s-fill" />
            </View>
            <Text style={{fontSize: 14, fontWeight: '500'}}>(27 Reviews)</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 40,
          }}>
          <Text style={{fontSize: 18}}>Rp. 450.000</Text>
          <View
            style={{
              borderWidth: 1,
              padding: 10,
              flexDirection: 'row',
              borderRadius: 15,
              width: '30%',
              justifyContent: 'space-between',
              height: 45,
            }}>
            <RemixIcon name="ri-subtract-line" />
            <Text style={{fontSize: 18, fontWeight: '400'}}>2</Text>
            <RemixIcon name="ri-add-line" />
          </View>
          <ButtonPrimary
            title="Cart"
            style={{paddingHorizontal: 20}}
            onPress={() => navigation.navigate('ShoppingBagScreens')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreens;

const styles = StyleSheet.create({});
