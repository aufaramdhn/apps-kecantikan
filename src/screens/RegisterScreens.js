import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View style={{backgroundColor: '#c7c7c7', padding: 10}}>
      <Text style={{marginBottom: 10}}>{props.title}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 1,
            width: '80%',
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <TextInput placeholder={props.placeholder} />
        </View>
      </View>
    </View>
  );
};

const RegisterScreens = navigation => {
  return (
    <SafeAreaView style={{flex: 1, padding: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#0004d2'}}>
          <Text>
            Yuk, daftarkan diri sebagai pengguna dengan mengisi data diri
            sebagai berikut
          </Text>
        </View>
        <Input no="+62" title="Nomor Whatsapp" placeholder="Nomor Whatsapp" />
        <Input title="Email" placeholder="Your Email" />
        <Input title="Tanggal Lahir" placeholder="Tanggal Lahir" />
        <Input title="Provinsi" />
        <Input title="Kota/Kabupaten" />
        <Input title="Kecamatan" />
        <Input title="Alamat" />
        <Input title="Buat Kata Sandi" placeholder="****" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreens;

const styles = StyleSheet.create({});
