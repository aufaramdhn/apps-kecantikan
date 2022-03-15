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

const Ekspedisi = [
  {
    id: '1',
    ekspedisi: 'JNE (Reguler)',
    price: 'Rp. 9.000',
    est: 'Estimasi 2-3 hari',
  },
  {
    id: '2',
    ekspedisi: 'J&T Express',
    price: 'Rp. 10.000',
    est: 'Estimasi 2-3 hari',
  },
  {
    id: '3',
    ekspedisi: 'Tiki',
    price: 'Rp. 5.000',
    est: 'Estimasi 1-2 hari',
  },
  {
    id: '4',
    ekspedisi: 'Sicepat',
    price: 'Rp. 15.000',
    est: 'Estimasi 1-2 hari',
  },
  {
    id: '5',
    ekspedisi: 'Ninja Express',
    price: 'Rp. 13.000',
    est: 'Estimasi 1-2 hari',
  },
];

const ModalPop = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState();
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: COLORS.grey,
                  paddingBottom: 5,
                }}>
                <Text
                  style={{fontSize: 18, color: '#1d1d1d', fontWeight: 'bold'}}>
                  Pilih Jasa Ekspedisi
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <RemixIcon name="ri-close-fill" color="#1d1d1d" />
                </TouchableOpacity>
              </View>
              {Ekspedisi.map(e => {
                return (
                  <View
                    key={e.id}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomWidth: 1,
                      borderColor: COLORS.grey,
                      paddingVertical: 5,
                    }}>
                    <View style={{paddingRight: 90}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#1d1d1d',
                            fontWeight: 'bold',
                          }}>
                          {e.ekspedisi}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#F1D00A',
                            fontWeight: 'bold',
                            marginLeft: 4,
                          }}>
                          {e.price}
                        </Text>
                      </View>
                      <Text style={{fontSize: 16, color: '#1d1d1d'}}>
                        {e.est}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => setSelected(e.id)}>
                      <RemixIcon
                        name="ri-check-fill"
                        color={selected === e.id ? COLORS.succes : COLORS.grey}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
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
