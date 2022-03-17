import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';
import RemixIcon from 'react-native-remix-icon';

const ChatScreens = () => {
  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 16}}>Hari ini</Text>
      </View>
      <View style={{height: '100%'}}>
        <View
          style={{
            backgroundColor: COLORS.grey,
            width: '50%',
            padding: 10,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginLeft: 10,
            marginVertical: 10,
          }}>
          <Text style={{color: COLORS.white}}>Ada yang bisa saya bantu?</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.grey,
            alignItems: 'center',
            width: '78%',
            padding: 3,
            borderRadius: 20,
            marginRight: 10,
          }}>
          <TextInput placeholder="Tulis Pesan" style={{width: '88%'}} />
          <RemixIcon name="ri-send-plane-fill" color={COLORS.black} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.grey,
            padding: 15,
            borderRadius: 20,
          }}>
          <RemixIcon name="ri-mic-fill" color={COLORS.black} />
        </View>
      </View>
    </View>
  );
};

export default ChatScreens;

const styles = StyleSheet.create({});
