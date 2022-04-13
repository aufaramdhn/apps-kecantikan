import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import Flower from '../containers/organism/Flower.organism';
import {DetailStyles} from '../styles/DetailStyles';

const DetailScreens = ({route, navigation}) => {
  return (
    <>
      {console.log(route.params)}
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{flex: 1}}>
            <Image
              source={route.params.data.image}
              style={DetailStyles.image}
            />
          </View>
          <Flower />
          <View style={DetailStyles.containerDesc}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{fontSize: 24, fontWeight: '500', color: '#545454'}}>
                  {route.params.data.name}
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#545454'}}>
                  {route.params.data.desc}
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
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  (27 Reviews)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 40,
              }}>
              <Text style={{fontSize: 18}}>{route.params.data.price}</Text>
              <View style={DetailStyles.containerFooter}>
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DetailScreens;

const styles = StyleSheet.create({});
