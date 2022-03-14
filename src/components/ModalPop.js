import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import RemixIcon from 'react-native-remix-icon';
import {ButtonPrimary} from '.';
import COLORS from '../constant/Colors';

const ModalPop = () => {
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
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: COLORS.grey,
          paddingBottom: 5,
          marginTop: 10,
        }}>
        <RemixIcon name="ri-truck-fill" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '94%',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#1d1d1d',
              marginLeft: 7,
            }}>
            Opsi Pengiriman
          </Text>
          <RemixIcon name="ri-arrow-right-s-line" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default ModalPop;
