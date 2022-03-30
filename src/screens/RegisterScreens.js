import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constant/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalPopUp from '../components/atoms/ModalPopUp';
import {Picker} from '@react-native-picker/picker';
import RemixIcon from 'react-native-remix-icon';
import TxtInputAtoms from '../components/atoms/TxtInputAtoms';

const RegisterScreens = ({navigation}) => {
  const [selectedProvinsi, setSelectedProvinsi] = useState();
  const [selectedKotaKab, setSelectedKotaKab] = useState();
  const [selectedKecamatan, setSelectedKecamatan] = useState();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const setIcon = () => {
    setChangeIcon(!changeIcon);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
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
          <View style={{marginHorizontal: 10}}>
            <Text style={{marginBottom: 10, color: 'black'}}>No. Whatsapp</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: '#c7c7c7',
                  justifyContent: 'center',
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  marginRight: 10,
                }}>
                <Text>+62</Text>
              </View>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: '#c7c7c7',
                  width: '77%',
                  paddingLeft: 10,
                }}
                placeholder="Your name"
              />
            </View>
          </View>
          <TxtInputAtoms title="Email" placeholder="Your Email" />
          <View style={{marginVertical: 10}}>
            <Text
              style={{marginBottom: 10, marginHorizontal: 10, color: 'black'}}>
              Tanggal Lahir
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                marginHorizontal: 10,
                borderRadius: 10,
                borderColor: '#c7c7c7',
                paddingVertical: 15,
                paddingHorizontal: 6,
              }}
              onPress={() => showDatepicker()}>
              <Text>{date.toLocaleDateString()}</Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <Text style={{marginBottom: 10, color: 'black'}}>Provinsi</Text>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#c7c7c7',
              }}>
              <Picker
                style={{color: COLORS.grey}}
                selectedValue={selectedProvinsi}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedProvinsi(itemValue)
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <Text style={{marginBottom: 10, color: 'black'}}>
              Kota/Kabupaten
            </Text>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#c7c7c7',
              }}>
              <Picker
                style={{color: '#c7c7c7'}}
                selectedValue={selectedKotaKab}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedKotaKab(itemValue)
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <Text style={{marginBottom: 10, color: 'black'}}>Kecamatan</Text>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#c7c7c7',
              }}>
              <Picker
                style={{color: '#c7c7c7'}}
                selectedValue={selectedKecamatan}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedKecamatan(itemValue)
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <TxtInputAtoms title="Alamat" style={{height: 90}} />
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <Text>Password</Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#c7c7c7',
                paddingHorizontal: 10,
              }}>
              <TextInput
                placeholder="Password"
                secureTextEntry={changeIcon ? false : true}
                style={{width: '90%'}}
              />
              <TouchableOpacity onPress={() => setIcon()}>
                <RemixIcon
                  name={changeIcon ? 'ri-eye-fill' : 'ri-eye-off-fill'}
                  color={COLORS.grey}
                />
              </TouchableOpacity>
            </View>
          </View>
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
