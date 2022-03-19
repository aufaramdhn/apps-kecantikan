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
import React, {useState} from 'react';
import {ButtonPrimary} from '../components';
import {LoginStyles} from '../styles/LoginStyles';
import axios from 'axios';

const Input = props => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{marginBottom: 10, marginHorizontal: 10, color: 'black'}}>
        {props.title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={LoginStyles.Input}>
          <TextInput
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            style={props.style}
            onChangeText={props.onChangeText}
            value={props.value}
          />
        </View>
      </View>
    </View>
  );
};

const LoginScreens = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onHandle = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    console.log(formData);
    await axios
      .post('https://api-dev.betterjob.id/api/login', formData, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={LoginStyles.ContainerImageLogin}>
          <Image
            source={require('../assets/img.jpg')}
            style={LoginStyles.ImageProfile}
          />
          <Text style={{marginTop: 30}}>Selamat Datang!</Text>
          <Text style={{marginTop: 8}}>Harap isi data ingin dengan benar</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            padding: 20,
          }}>
          <Input
            title="Username"
            value={username}
            onChangeText={value => setUsername(value)}
          />
          <Input title="Email" />
          <Input
            title="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
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
            <Text>Belum Memiliki Akun?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreens')}>
              <Text
                style={{
                  color: '#4285F4',
                  textDecorationLine: 'underline',
                  marginLeft: 5,
                }}>
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
