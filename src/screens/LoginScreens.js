import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';
import {ButtonPrimary} from '../components';

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

const LoginScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <Image
            source={require('../assets/img.jpg')}
            style={{width: 200, height: 200, borderRadius: 200 / 2}}
          />
          <Text style={[styles.textWelcome, {marginTop: 30}]}>
            Selamat Datang!
          </Text>
          <Text style={[styles.textWelcome, {marginTop: 8}]}>
            Harap isi data ingin dengan benar
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            padding: 20,
          }}>
          <Input title="Username" />
          <Input title="Email" />
          <Input title="Password" secureTextEntry={true} />
          <Text
            style={{
              textDecorationLine: 'underline',
              color: '#4285F4',
              textAlign: 'right',
              alignSelf: 'flex-end',
              marginHorizontal: 8,
              marginVertical: 4,
            }}>
            Lupa Kata Sandi ?
          </Text>
          <ButtonPrimary
            title="Masuk"
            style={{marginVertical: 20}}
            onPress={() => navigation.navigate('HomeScreens')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <Text style={styles.textLogin}>Belum Memiliki Akun?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreens')}>
              <Text
                style={[
                  styles.textLogin,
                  {
                    color: '#4285F4',
                    textDecorationLine: 'underline',
                    marginLeft: 5,
                  },
                ]}>
                Daftar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({});
