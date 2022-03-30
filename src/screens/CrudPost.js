import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CrudPost = ({navigation}) => {
  const [crud, setCrud] = useState('');

  const onHandleCreate = async () => {
    const formData = new FormData();
    formData.append('department_name', crud);
    const token = await AsyncStorage.getItem('token');
    await axios
      .post('https://api-dev.betterjob.id/api/departments/create', formData, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        // const storeToken = async () => {
        //   await AsyncStorage.setItem('token', res.data.success.token);
        // };
        // storeToken();
        console.log(res.data);
        navigation.navigate('HomeScreens');
      })
      .catch(e => {
        console.log(e);
        if (e.response) {
          console.log('response');
          console.log(e.response.data);
        } else if (e.request) {
          console.log('request');
          console.log(e.request.data);
        } else {
          console.log('other');
          console.log(e.message);
        }
      });
  };

  const onHandleUpdate = async () => {
    const token = await AsyncStorage.getItem('token');
    await axios
      .put(
        'https://api-dev.betterjob.id/api/departments/update/74',
        {department_name: crud},
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      )
      .then(res => {
        // const storeToken = async () => {
        //   await AsyncStorage.setItem('token', res.data.success.token);
        // };
        // storeToken();
        console.log(res.data);
        navigation.navigate('HomeScreens');
      })
      .catch(e => {
        console.log(e);
        if (e.response) {
          console.log('response');
          console.log(e.response.data);
        } else if (e.request) {
          console.log('request');
          console.log(e.request.data);
        } else {
          console.log('other');
          console.log(e.message);
        }
      });
  };

  const onHandleDelete = async () => {
    const token = await AsyncStorage.getItem('token');
    await axios
      .delete('https://api-dev.betterjob.id/api/departments/delete/74', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        // const storeToken = async () => {
        //   await AsyncStorage.setItem('token', res.data.success.token);
        // };
        // storeToken();
        console.log(res.data);
        navigation.navigate('HomeScreens');
      })
      .catch(e => {
        console.log(e);
        if (e.response) {
          console.log('response');
          console.log(e.response.data);
        } else if (e.request) {
          console.log('request');
          console.log(e.request.data);
        } else {
          console.log('other');
          console.log(e.message);
        }
      });
  };

  return (
    <View style={{backgroundColor: '#C7C7C7', flex: 1, paddingHorizontal: 10}}>
      <View style={{marginVertical: 15}}>
        <Text>blank</Text>
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, fontSize: 16}}
          value={crud}
          onChangeText={value => setCrud(value)}
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
        onPress={() => onHandleCreate()}>
        <Text style={{color: COLORS.white, fontSize: 18}}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,
          borderRadius: 10,
        }}
        onPress={() => onHandleUpdate()}>
        <Text style={{color: COLORS.white, fontSize: 18}}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,
          borderRadius: 10,
        }}
        onPress={() => onHandleDelete()}>
        <Text style={{color: COLORS.white, fontSize: 18}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CrudPost;

const styles = StyleSheet.create({});
