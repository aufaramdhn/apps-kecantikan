import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import {ButtonPrimary} from '../components';

const OnBoardScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 2,
        }}>
        <Image
          source={require('../assets/onboard.jpg')}
          style={{
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            width: 200,
            textAlign: 'center',
            fontSize: 28,
            marginVertical: 10,
          }}>
          Let Us Reward You, Naturally
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreens')}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <RemixIcon name="ri-arrow-right-s-line" color="white" size="30" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreens;

const styles = StyleSheet.create({});
