import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';
import {ButtonPrimary, ModalPopUp} from '../components';

const Input = props => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{marginBottom: 10, marginHorizontal: 10, color: 'black'}}>
        {props.title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 2,
            width: '95%',
            marginHorizontal: 10,
            borderRadius: 10,
            borderColor: '#c7c7c7',
          }}>
          <TextInput
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            style={props.style}
          />
        </View>
      </View>
    </View>
  );
};

const RegisterScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 10, paddingTop: 30}}>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            Yuk, daftarkan diri sebagai pengguna dengan mengisi data diri
            sebagai berikut
          </Text>
        </View>
        <View style={{marginBottom: 25}}>
          <Input title="Nomor Whatsapp" placeholder="Nomor Whatsapp" />
          <Input title="Email" placeholder="Your Email" />
          <Input title="Tanggal Lahir" placeholder="Tanggal Lahir" />
          <Input title="Provinsi" />
          <Input title="Kota/Kabupaten" />
          <Input title="Kecamatan" />
          <Input title="Alamat" style={{height: 90}} />
          <Input title="Buat Kata Sandi" secureTextEntry={true} />
        </View>
        <ModalPopUp />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text style={styles.textLogin}>Sudah Punya Akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreens')}>
            <Text
              style={[
                styles.textLogin,
                {
                  color: '#4285F4',
                  textDecorationLine: 'underline',
                  marginLeft: 5,
                },
              ]}>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreens;

const styles = StyleSheet.create({
  Input: {},
});
