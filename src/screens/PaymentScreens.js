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

const ListBank = [
  {
    id: '1',
    bank: 'Bank BCA (Dicek otomatis)',
    image: require('../assets/bca.png'),
  },
  {
    id: '2',
    bank: 'Bank Mandiri & Lainnya (Dicek otomatis)',
    image: require('../assets/mandiri.png'),
  },
  {
    id: '3',
    bank: 'Bank BNI (Dicek otomatis)',
    image: require('../assets/bni.png'),
  },
  {
    id: '4',
    bank: 'Bank BRI (Dicek otomatis)',
    image: require('../assets/bri.png'),
  },
  {
    id: '5',
    bank: 'Bank Lainnya (Dicek otomatis)',
    image: require('../assets/more-line.png'),
  },
];

const MetodePembayaran = [
  {
    id: '1',
    name: 'indomaret',
    image: require('../assets/indomaret.png'),
  },
  {
    id: '2',
    name: 'Alfamart',
    image: require('../assets/alfa.jpg'),
  },
  {
    id: '3',
    name: 'Gopay',
    image: require('../assets/gopay 2.jpg'),
  },
  {
    id: '4',
    name: 'Akulaku',
    image: require('../assets/akulaku.jpg'),
  },
];

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
        <Image
          source={props.source}
          style={{width: 25, height: 25, borderRadius: 25 / 2}}
        />
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
  const [selected, setSelected] = useState();

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <Payment
          title="Transfer Bank"
          icon="ri-arrow-right-s-line"
          source={require('../assets/arrow-left-right-line.png')}
        />
        {onClick ? (
          <>
            <Payment
              title="Kartu Kredit / Debit nline"
              icon="ri-arrow-down-s-line"
              onPress={() => onClickOpen(true)}
              source={require('../assets/bank-card-fill.png')}
            />
            {ListBank.map(e => {
              return (
                <View
                  key={e.id}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.grey,
                    marginLeft: 50,
                    paddingVertical: 5,
                  }}>
                  <Image
                    source={e.image}
                    style={{width: 25, height: 25, borderRadius: 25 / 2}}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>{e.bank}</Text>
                    <TouchableOpacity onPress={() => setSelected(e.bank)}>
                      <RemixIcon
                        style={{marginRight: 20}}
                        name={
                          selected === e.bank
                            ? 'ri-checkbox-circle-line'
                            : 'ri-checkbox-blank-circle-line'
                        }
                        color={
                          selected === e.bank ? COLORS.primary : COLORS.grey
                        }
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
          />
        )}
        {MetodePembayaran.map(i => {
          return (
            <View
              key={i.id}
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                padding: 10,
                borderColor: COLORS.grey,
              }}>
              <View style={{width: '95%', marginHorizontal: 10}}>
                <Image
                  source={i.image}
                  style={{width: 25, height: 25, borderRadius: 25 / 2}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 20, fontWeight: '400'}}>
                    {i.name}
                  </Text>
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

const styles = StyleSheet.create({});
