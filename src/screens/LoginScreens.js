import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import {LoginStyles} from '../styles/LoginStyles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';

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
  const [handlePassword, setHandlePassword] = useState(true);

  const onHandle = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    await axios
      .post('https://api-dev.betterjob.id/api/login', formData, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then(res => {
        const storeToken = async () => {
          await AsyncStorage.setItem('token', res.data.success.token);
        };
        storeToken();
        navigation.navigate('HomeScreens');
      })
      .catch(e => {
        console.log(e);
        if (e.response) {
          console.log('response');
          console.log(e.response.data);
          Alert.alert('error', 'error password');
        } else if (e.request) {
          console.log('request');
          console.log(e.request.data);
        } else {
          console.log('other');
          console.log(e.message);
        }
      });
  };
  // .post('https://api-dev.betterjob.id/api/login', formData, {
  //   headers: {
  //     Accept: 'application/json',
  //   },
  // })
  // .then(res => {
  //   console.log(res);
  // })
  // .catch(e => {
  //   console.log(e);
  // });
  // console.log(username);
  // console.log(password);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={LoginStyles.ContainerImageLogin}>
          <Image
            source={require('../assets/img.jpg')}
            style={LoginStyles.ImageProfile}
          />
          <Text
            style={{
              marginTop: 30,
              fontSize: 24,
              color: COLORS.black,
              fontWeight: 'bold',
            }}>
            Selamat Datang!
          </Text>
          <Text style={{marginTop: 8, fontSize: 18}}>
            Harap isi data ingin dengan benar
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            padding: 20,
          }}>
          <Input
            placeholder="username"
            title="Username"
            value={username}
            onChangeText={value => setUsername(value)}
            style={{fontSize: 18}}
          />
          <Input title="Email" placeholder="email" style={{fontSize: 18}} />
          <View style={{marginVertical: 10}}>
            <Text
              style={{marginBottom: 10, marginHorizontal: 10, color: 'black'}}>
              Password
            </Text>
            <View
              style={{
                borderWidth: 2,
                width: '95%',
                marginHorizontal: 10,
                borderRadius: 10,
                borderColor: COLORS.black,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
              }}>
              <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry={handlePassword}
                onChangeText={value => setPassword(value)}
                style={{width: '90%', fontSize: 18}}
              />
              <TouchableOpacity
                onPress={() => setHandlePassword(!handlePassword)}>
                <RemixIcon
                  name={handlePassword ? 'ri-eye-off-fill' : 'ri-eye-fill'}
                />
              </TouchableOpacity>
            </View>
          </View>
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
