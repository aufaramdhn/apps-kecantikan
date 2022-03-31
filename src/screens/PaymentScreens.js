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
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import COLORS from '../constant/Colors';
import {PaymentStyles} from '../styles/PaymentStyles';

const ListBank = [
  {
    id: '1',
    bank: 'Bank BCA (Dicek otomatis)',
    image: require('../assets/logo/bca.png'),
  },
  {
    id: '2',
    bank: 'Bank Mandiri & Lainnya (Dicek otomatis)',
    image: require('../assets/logo/mandiri.png'),
  },
  {
    id: '3',
    bank: 'Bank BNI (Dicek otomatis)',
    image: require('../assets/logo/bni.png'),
  },
  {
    id: '4',
    bank: 'Bank BRI (Dicek otomatis)',
    image: require('../assets/logo/bri.png'),
  },
  {
    id: '5',
    bank: 'Bank Lainnya (Dicek otomatis)',
    image: require('../assets/icon/more-line.png'),
  },
];

const MetodePembayaran = [
  {
    id: '1',
    name: 'Indomaret',
    image: require('../assets/logo/indomaret.png'),
  },
  {
    id: '2',
    name: 'Alfamart',
    image: require('../assets/logo/alfa.jpg'),
  },
  {
    id: '3',
    name: 'Gopay',
    image: require('../assets/logo/gopay.jpg'),
  },
  {
    id: '4',
    name: 'Akulaku',
    image: require('../assets/logo/akulaku.jpg'),
  },
];

const Payment = props => {
  return (
    <View style={PaymentStyles.ContainerPayment}>
      <View style={PaymentStyles.ContainerPayment1}>
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image source={props.source} style={PaymentStyles.ImagePayment} />
            <Text style={{fontSize: 20, fontWeight: '400'}}>{props.title}</Text>
          </View>
          <RemixIcon name={props.icon} color={props.color} size={props.size} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PaymentScreens = ({navigation}) => {
  const [onClick, setOnClick] = useState(false);
  const [selected, setSelected] = useState();

  const onClickOpen = () => {
    setOnClick(!onClick);
  };

  return (
    <SafeAreaView style={PaymentStyles.Container}>
      <View style={{flex: 1}}>
        <Payment
          title="Transfer Bank"
          icon="ri-arrow-right-s-line"
          source={require('../assets/icon/arrow-left-right-line.png')}
        />
        {onClick ? (
          <>
            <Payment
              title="Kartu Kredit / Debit nline"
              icon="ri-arrow-down-s-line"
              onPress={() => onClickOpen(true)}
              source={require('../assets/icon/bank-card-fill.png')}
            />
            {ListBank.map(e => {
              return (
                <View key={e.id} style={PaymentStyles.ContainerListBank}>
                  <View style={PaymentStyles.ContainerListBank1}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Image source={e.image} style={PaymentStyles.ImageBank} />
                      <Text style={{fontSize: 14, fontWeight: '400'}}>
                        {e.bank}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => setSelected(e.id)}>
                      <RemixIcon
                        name={
                          selected === e.id
                            ? 'ri-checkbox-circle-line'
                            : 'ri-checkbox-blank-circle-line'
                        }
                        color={selected === e.id ? COLORS.primary : COLORS.grey}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        ) : (
          <Payment
            title="Kartu Kredit / Debit nline"
            icon="ri-arrow-right-s-line"
            onPress={() => onClickOpen(true)}
            source={require('../assets/icon/bank-card-fill.png')}
          />
        )}
        {MetodePembayaran.map(i => {
          return (
            <View key={i.id} style={PaymentStyles.ContainerListMetode}>
              <View style={PaymentStyles.ContainerListMetode1}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image source={i.image} style={PaymentStyles.ImageMetode} />
                  <Text style={{fontSize: 20, fontWeight: '400'}}>
                    {i.name}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setSelected(i.name)}>
                  <RemixIcon
                    name={
                      selected === i.name
                        ? 'ri-checkbox-circle-line'
                        : 'ri-checkbox-blank-circle-line'
                    }
                    color={selected === i.name ? COLORS.primary : COLORS.grey}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <View style={{marginVertical: 50}}>
        <ButtonPrimary
          title="Konfirmasi"
          icon="ri-checkbox-blank-circle-line"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreens;
