import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RemixIcon from 'react-native-remix-icon';
import {ButtonPrimary} from '../components';
import COLORS from '../constant/Colors';

const Payment = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 10,
        borderColor: COLORS.grey,
      }}>
      <View style={{width: '95%', marginHorizontal: 10}}>
        <Image source={props.source} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: '400'}}>{props.title}</Text>
          <TouchableOpacity onPress={props.onPress}>
            <RemixIcon
              name={props.icon}
              color={props.color}
              size={props.size}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PaymentScreens = ({navigation}) => {
  const [onClick, setOnClick] = useState(false);

  const onClickOpen = () => {
    setOnClick(!onClick);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#FAFAFA',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <RemixIcon
            name="ri-arrow-left-circle-line"
            size={38}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginLeft: 20,
            color: '#1d1d1d',
          }}>
          Metode Pembayaran
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Payment title="Transfer Bank" icon="ri-arrow-right-s-line" />
        {onClick ? (
          <>
            <Payment
              title="Kartu Kredit / Debit nline"
              icon="ri-arrow-down-s-line"
              onPress={() => onClickOpen(true)}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: COLORS.grey,
                marginLeft: 50,
                paddingVertical: 5,
              }}>
              <Text>Bank BCA (Dicek otomatis)</Text>
              <RemixIcon
                style={{marginRight: 20}}
                name="ri-checkbox-blank-circle-line"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: COLORS.grey,
                marginLeft: 50,
                paddingVertical: 5,
              }}>
              <Text>Bank Mandiri & Lainnya (Dicek otomatis)</Text>
              <RemixIcon
                style={{marginRight: 20}}
                name="ri-checkbox-blank-circle-line"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: COLORS.grey,
                marginLeft: 50,
                paddingVertical: 5,
              }}>
              <Text>Bank BNI (Dicek otomatis)</Text>
              <RemixIcon
                style={{marginRight: 20}}
                name="ri-checkbox-blank-circle-line"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: COLORS.grey,
                marginLeft: 50,
                paddingVertical: 5,
              }}>
              <Text>Bank BRI (Dicek otomatis)</Text>
              <RemixIcon
                style={{marginRight: 20}}
                name="ri-checkbox-blank-circle-line"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: COLORS.grey,
                marginLeft: 50,
                paddingVertical: 5,
              }}>
              <Text>Bank Lainnya (Dicek otomatis)</Text>
              <RemixIcon
                style={{marginRight: 20}}
                name="ri-checkbox-blank-circle-line"
                s
              />
            </View>
          </>
        ) : (
          <Payment
            title="Kartu Kredit / Debit nline"
            icon="ri-arrow-right-s-line"
            onPress={() => onClickOpen(true)}
          />
        )}

        <Payment title="Indomart" icon="ri-checkbox-blank-circle-line" />
        <Payment title="Alfamart" icon="ri-checkbox-blank-circle-line" />
        <Payment title="Gopay" icon="ri-checkbox-blank-circle-line" />
        <Payment title="Akulaku" icon="ri-checkbox-blank-circle-line" />
      </View>
      <View style={{marginVertical: 50}}>
        <ButtonPrimary
          title="Konfirmasi"
          icon="ri-checkbox-blank-circle-line"
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreens;

const styles = StyleSheet.create({});
