import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../components';
import FIREBASE from '../../config/FIREBASE';

const TambahKontak = ({navigation}) => {
  const [first, setFirst] = useState({
    name: '',
    noHP: '',
    Alamat: '',
  });

  const onSubmit = () => {
    if (first.name && first.Alamat && first.noHP) {
      const KontakRefenrensi = FIREBASE.database().ref('kontak');
      const kontak = {
        name: first.name,
        noHP: first.noHP,
        Alamat: first.Alamat,
      };

      KontakRefenrensi.push(kontak)
        .then(data => {
          Alert.alert('Success', 'Success');
          navigation.navigate('Home');
        })
        .catch(e => {
          console.log('Errorr', e);
        });
      console.log(first);
    } else {
      Alert.alert('Error', 'Nama, No. Hp, dan Alamat wajib di isi');
    }
  };

  return (
    <View style={styles.page}>
      <Input
        label="Nama"
        placeholder="Masukan Nama"
        onChangeText={value =>
          setFirst({
            ...first,
            ['name']: value,
          })
        }
        value={first.name}
      />
      <Input
        label="No. HP"
        placeholder="Masukan No. Hp"
        keyboardType="number-pad"
        onChangeText={value =>
          setFirst({
            ...first,
            ['noHP']: value,
          })
        }
        value={first.noHP}
      />
      <Input
        label="Alamat"
        placeholder="Masukan Alamat"
        multiline={true}
        numberOfLines={4}
        styles={{textAlignVertical: 'top'}}
        onChangeText={value =>
          setFirst({
            ...first,
            ['Alamat']: value,
          })
        }
        value={first.Alamat}
      />
      <TouchableOpacity style={styles.tombol} onPress={() => onSubmit()}>
        <Text style={styles.textTombol}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TambahKontak;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: 'lightgreen',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  textTombol: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
