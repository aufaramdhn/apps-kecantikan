import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import RemixIcon from 'react-native-remix-icon';
import ButtonPrimary from './ButtonPrimary';
import COLORS from '../../constant/Colors';

const ModalPopUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <RemixIcon
                name="ri-checkbox-circle-line"
                color={COLORS.primary}
                size="100"
                style={{marginBottom: 25}}
              />
              <Text style={styles.modalText}>
                Selamat! Akun Kamu berhasil terdaftar. Yuk, Masuk dengan
                username dan passwordmu
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Masuk Sekarang</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <ButtonPrimary
        title="Daftar"
        onPress={() => setModalVisible(true)}
        style={{marginBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default ModalPopUp;
