import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import FirebaseUtil from '../../utils/FirebaseUtil';

const Home = ({navigation}) => {
  const signOut = () => {
    FirebaseUtil.signOut().catch(e => {
      console.log(e);
      alert('Something went wrong');
    });
  };

  return (
    <View style={styles.page}>
      <Text>Halaman Home</Text>
      <View style={styles.wrapperButton}>
        <TouchableOpacity
          style={styles.btnTambah}
          onPress={() => navigation.navigate('Tambah')}>
          <RemixIcon name="ri-add-line" size="24" color="white" />
        </TouchableOpacity>
      </View>
      <Button onPress={() => signOut()} title="Logout" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    backgroundColor: 'aqua',
    padding: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
