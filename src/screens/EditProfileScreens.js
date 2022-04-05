import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RemixIcon from 'react-native-remix-icon';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import COLORS from '../constant/Colors';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {EditProfileStyles} from '../styles/EditProfileStyles';

const EditProfileScreen = ({navigation}) => {
  const [selectedProvinsi, setSelectedProvinsi] = useState();
  const [selectedKotaKab, setSelectedKotaKab] = useState();
  const [selectedKecamatan, setSelectedKecamatan] = useState();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onShow = (event, selectedDate) => {
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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={EditProfileStyles.container}>
          <TouchableOpacity>
            <Image
              source={require('../assets/img.jpg')}
              style={{height: 100, width: 100, zIndex: 0}}
            />
            <TouchableOpacity style={EditProfileStyles.containerIcon}>
              <RemixIcon name="ri-camera-fill" color={COLORS.white} size="22" />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text>Ganti Foto</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: '#fff',
          }}>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
              Jenis Kelamin
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Perempuan</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Laki-laki</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
              Username
            </Text>
            <TextInput
              style={[EditProfileStyles.containerInput, {padding: 5}]}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{marginBottom: 10}}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
                Nama Depan
              </Text>
              <TextInput
                style={[
                  EditProfileStyles.containerInput,
                  {
                    paddingVertical: 2,
                    paddingRight: 145,
                  },
                ]}
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
                Nama Belakang
              </Text>
              <TextInput
                style={
                  (EditProfileStyles.containerInput,
                  {
                    paddingVertical: 2,
                    paddingRight: 145,
                  })
                }
              />
            </View>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
              Tanggal Lahir
            </Text>
            <TouchableOpacity
              style={[
                EditProfileStyles.containerInput,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                },
              ]}
              onPress={showDatepicker}>
              <RemixIcon name="ri-calendar-line" color="#c7c7c7" size="28" />
              <Text
                style={[
                  EditProfileStyles.textPicker,
                  {
                    color: '#c7c7c7',
                    marginLeft: 10,
                  },
                ]}>
                {date.toLocaleDateString()}
              </Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onShow}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
              Email
            </Text>
            <TextInput
              style={[
                EditProfileStyles.containerInput,
                {
                  padding: 5,
                },
              ]}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
              No. Telp
            </Text>
            <TextInput
              style={[
                EditProfileStyles.containerInput,
                {
                  padding: 5,
                },
              ]}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
              Alamat
            </Text>
            <TextInput
              style={[
                EditProfileStyles.containerInput,
                {
                  padding: 5,
                },
              ]}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginVertical: 10}}>
              <Text style={[EditProfileStyles.textPicker, {color: '#1d1d1d'}]}>
                Provinsi
              </Text>
              <View style={EditProfileStyles.containerPicker}>
                <Picker
                  style={{color: COLORS.grey, paddingLeft: 165}}
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
            <View style={{marginVertical: 10}}>
              <Text style={[EditProfileStyles.textPicker, {color: '#1d1d1d'}]}>
                Kota/Kabupaten
              </Text>
              <View style={EditProfileStyles.containerPicker}>
                <Picker
                  style={{color: COLORS.grey, paddingLeft: 165}}
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
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginVertical: 10}}>
              <Text style={[EditProfileStyles.textPicker, {color: '#1d1d1d'}]}>
                Kecamatan
              </Text>
              <View
                style={[
                  EditProfileStyles.containerPicker,
                  {
                    marginRight: 10,
                  },
                ]}>
                <Picker
                  style={{color: COLORS.grey, paddingLeft: 165}}
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
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#1d1d1d'}}>
                Kode Pos
              </Text>
              <View style={{marginVertical: 10}}>
                <TextInput
                  placeholder="Kode Pos"
                  style={EditProfileStyles.containerKodePos}
                />
              </View>
            </View>
          </View>
        </View>
        <ButtonPrimary
          title="Edit Profile"
          padding={{marginHorizontal: 10, marginBottom: 20}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({});
