import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';

const OnBoardScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
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
          backgroundColor: '#1d1d1d',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>
          Let Us Reward You, Naturally
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreens')}>
          <View
            style={{
              backgroundColor: '#c7c7c7',
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <RemixIcon name="ri-arrow-right-s-line" color="#fff" size="30" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreens;

const styles = StyleSheet.create({});
