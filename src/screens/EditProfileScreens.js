import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import RemixIcon from 'react-native-remix-icon';
import {ButtonPrimary} from '../components';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '../constant/Colors';

const EditProfileScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RemixIcon />
            <Text>Profile</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RemixIcon />
            <RemixIcon />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00ff00',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 50,
          }}>
          <Image
            source={require('../assets/img.jpg')}
            style={{height: 100, width: 100}}
          />
          <Text>Ganti Foto</Text>
        </View>
        <View style={{flex: 1}}>
          <View>
            <Text>Jenis Kelamin</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  tintColor={COLORS.primary}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text>Perempuan</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text>Laki-laki</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Username</Text>
            <TextInput
              placeholder="name"
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.grey,
                padding: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text>Nama Depan</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: COLORS.grey,
                  paddingVertical: 2,
                  paddingHorizontal: 90,
                }}
              />
            </View>
            <View>
              <Text>Nama Belakang</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: COLORS.grey,
                  paddingVertical: 2,
                  paddingHorizontal: 90,
                }}
              />
            </View>
          </View>
          <View>
            <Text>Tanggal Lahir</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RemixIcon />
              <TextInput
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: COLORS.grey,
                  padding: 5,
                }}
              />
            </View>
          </View>
          <View>
            <Text>Email</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.grey,
                padding: 5,
              }}
            />
          </View>
          <View>
            <Text>No. Telp</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.grey,
                padding: 5,
              }}
            />
          </View>
          <View>
            <Text>Alamat</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.grey,
                padding: 5,
              }}
            />
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text>Provinsi</Text>
                <TextInput />
              </View>
              <View>
                <Text>Kabupaten/Kota</Text>
                <TextInput />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text>Kecamatan</Text>
                <TextInput />
              </View>
              <View>
                <Text>Kode Pos</Text>
                <TextInput />
              </View>
            </View>
          </View>
          <ButtonPrimary title="Edit Profile" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({});
