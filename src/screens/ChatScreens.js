import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';
import RemixIcon from 'react-native-remix-icon';
import {ChatStyles} from '../styles/ChatStyles';

const ChatScreens = () => {
  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 16}}>Hari ini</Text>
      </View>
      <View style={{height: '100%'}}>
        <View style={ChatStyles.popText1}>
          <Text style={{color: COLORS.white}}>Ada yang bisa saya bantu?</Text>
        </View>
      </View>
      <View style={ChatStyles.containerSend}>
        <View style={ChatStyles.containerInput}>
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
