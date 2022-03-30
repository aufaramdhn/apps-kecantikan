import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constant/Colors';
import axios from 'axios';

const NewRegis = ({navigation}) => {
  const [first, setFirst] = useState({
    username: '',
    email: '',
    password: '',
    c_password: '',
    company_username: '',
    email_user: '',
    address: '',
    fax: '',
    whatsapp: '',
    first_name: '',
    last_name: '',
    company_username: '',
  });
  const onHandle = async () => {
    const formData = new FormData();
    formData.append('username', first.username);
    formData.append('email', first.email);
    formData.append('password', first.password);
    formData.append('c_password', first.c_password);
    formData.append('company_username', first.company_username);
    formData.append('email_user', first.email_user);
    formData.append('address', first.address);
    formData.append('fax', first.fax);
    formData.append('whatsapp', first.whatsapp);
    formData.append('first_name', first.first_name);
    formData.append('last_name', first.last_name);
    formData.append('company_name', first.company_name);
    await axios
      .post('https://api-dev.betterjob.id/api/register', formData, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then(res => {
        // const storeToken = async () => {
        //   await AsyncStorage.setItem('token', res.data.success.token);
        // };
        // storeToken();
        console.log(res.data);
        navigation.navigate('LoginScreens');
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
  console.log(first);
  return (
    <View style={{backgroundColor: '#C7C7C7', flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 15}}>
          <Text>username</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.username}
            onChangeText={value =>
              setFirst({
                ...first,
                ['username']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>email</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.email}
            onChangeText={value =>
              setFirst({
                ...first,
                ['email']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>password</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.password}
            onChangeText={value =>
              setFirst({
                ...first,
                ['password']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>confirm password</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.c_password}
            onChangeText={value =>
              setFirst({
                ...first,
                ['c_password']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>company username</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.company_username}
            onChangeText={value =>
              setFirst({
                ...first,
                ['company_username']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>email user</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.email_user}
            onChangeText={value =>
              setFirst({
                ...first,
                ['email_user']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>address</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.address}
            onChangeText={value =>
              setFirst({
                ...first,
                ['address']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>fax</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.fax}
            onChangeText={value =>
              setFirst({
                ...first,
                ['fax']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>whatsapp</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.whatsapp}
            onChangeText={value =>
              setFirst({
                ...first,
                ['whatsapp']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>First Name</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.first_name}
            onChangeText={value =>
              setFirst({
                ...first,
                ['first_name']: value,
              })
            }
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>last name</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.last_name}
            onChangeText={value =>
              setFirst({
                ...first,
                ['last_name']: value,
              })
            }
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text>company name</Text>
          <TextInput
            style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
            value={first.company_name}
            onChangeText={value =>
              setFirst({
                ...first,
                ['company_name']: value,
              })
            }
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
            borderRadius: 10,
          }}
          onPress={() => onHandle()}>
          <Text style={{color: COLORS.white, fontSize: 18}}>Create</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewRegis;

const styles = StyleSheet.create({});
