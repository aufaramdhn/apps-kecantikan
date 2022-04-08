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
import FirebaseUtil from '../utils/FirebaseUtil';

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
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [handlePassword, setHandlePassword] = useState(true);

  // const onHandle = async () => {
  //   const formData = new FormData();
  //   formData.append('username', username);
  //   formData.append('password', password);
  //   await axios
  //     .post('https://api-dev.betterjob.id/api/login', formData, {
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     })
  //     .then(res => {
  //       const storeToken = async () => {
  //         await AsyncStorage.setItem('token', res.data.success.token);
  //       };
  //       storeToken();
  //       navigation.navigate('HomeScreens');
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       if (e.response) {
  //         console.log('response');
  //         console.log(e.response.data);
  //         Alert.alert('error', 'error password');
  //       } else if (e.request) {
  //         console.log('request');
  //         console.log(e.request.data);
  //       } else {
  //         console.log('other');
  //         console.log(e.message);
  //       }
  //     });
  // };
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [create, setCreate] = useState(false);

  const signIn = () => {
    FirebaseUtil.signIn(email, password).catch(e => {
      console.log(e);
      alert('Email/Password is wrong');
    });
  };
  const signUp = () => {
    FirebaseUtil.signUp(email, password).catch(e => {
      console.log(e);
      alert('Something is went wrong');
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
          <Text style={LoginStyles.textWelcome}>Selamat Datang!</Text>
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
          {/* <Input
            placeholder="username"
            title="Username"
            value={username}
            onChangeText={value => setUsername(value)}
            style={{fontSize: 18}}
          /> */}
          <Input
            title="Email"
            placeholder="email"
            style={{fontSize: 18}}
            value={email}
            onChangeText={setEmail}
          />
          <View style={{marginVertical: 10}}>
            <Text
              style={{marginBottom: 10, marginHorizontal: 10, color: 'black'}}>
              Password
            </Text>
            <View style={LoginStyles.InputPassword}>
              <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry={handlePassword}
                onChangeText={setPassword}
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
          <Text style={LoginStyles.TextForgotPass}>Lupa Kata Sandi ?</Text>
          {create ? (
            <>
              <ButtonPrimary
                title="Daftar"
                style={{marginVertical: 20}}
                onPress={() => signUp()}
              />
              <View style={LoginStyles.TextRegis}>
                <Text>Sudah Memiliki Akun?</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#4285F4',
                      textDecorationLine: 'underline',
                      marginLeft: 5,
                    }}
                    onPress={() => setCreate(false)}>
                    Masuk
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <ButtonPrimary
                title="Masuk"
                style={{marginVertical: 20}}
                onPress={() => signIn()}
              />
              <View style={LoginStyles.TextRegis}>
                <Text>Belum Memiliki Akun?</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#4285F4',
                      textDecorationLine: 'underline',
                      marginLeft: 5,
                    }}
                    onPress={() => setCreate(true)}>
                    Daftar
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreens;
