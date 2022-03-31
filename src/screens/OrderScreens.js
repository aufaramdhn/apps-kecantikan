import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constant/Colors';
import RemixIcon from 'react-native-remix-icon';

const Header = [
  {
    status: 'Belum Dibayar',
  },
  {
    status: 'Dikemas',
  },
  {
    status: 'Dikirim',
  },
  {
    status: 'Selesai',
  },
  {
    status: 'Dibatalkan',
  },
  {
    status: 'Pengembalian',
  },
];

const Data = [
  {
    id: 1,
    nmToko: 'TOKO TEST',
    nmBarang: 'SERUM ANTI ACNE BEST SELLER',
    var: '20 ml',
    price: 'Rp. 400.000',
    qty: '1',
    dateTime: 'Konfirmasi Pesanan Produk Sebelum 13-03-2022',
    dateKirim: 'Minggu, 20 Mar 2022',
    ekspedisi: 'J&T Ekspress',
    status: 'Belum Dibayar',
    image: require('../assets/product/face-3.jpg'),
  },
  {
    id: 2,
    nmToko: 'TOKO TEST',
    nmBarang: 'SERUM ANTI ACNE BEST SELLER',
    var: '20 ml',
    price: 'Rp. 400.000',
    qty: '1',
    dateTime: 'Konfirmasi Pesanan Produk Sebelum 13-03-2022',
    dateKirim: 'Minggu, 20 Mar 2022',
    ekspedisi: 'J&T Ekspress',
    status: 'Dikemas',
    image: require('../assets/product/face-3.jpg'),
  },
  {
    id: 3,
    nmToko: 'TOKO TEST',
    nmBarang: 'SERUM ANTI ACNE BEST SELLER',
    var: '20 ml',
    price: 'Rp. 400.000',
    qty: '1',
    dateTime: 'Konfirmasi Pesanan Produk Sebelum 13-03-2022',
    dateKirim: 'Minggu, 20 Mar 2022',
    ekspedisi: 'J&T Ekspress',
    status: 'Dikirim',
    image: require('../assets/product/face-3.jpg'),
  },
  {
    id: 11,
    nmToko: 'TOKO TEST',
    nmBarang: 'SERUM ANTI ACNE BEST SELLER',
    var: '20 ml',
    price: 'Rp. 400.000',
    qty: '1',
    dateTime: 'Konfirmasi Pesanan Produk Sebelum 13-03-2022',
    dateKirim: 'Minggu, 20 Mar 2022',
    ekspedisi: 'J&T Ekspress',
    status: 'Dikirim',
    image: require('../assets/product/face-3.jpg'),
  },
  {
    id: 4,
    nmToko: 'TOKO TEST',
    nmBarang: 'SERUM ANTI ACNE BEST SELLER',
    var: '20 ml',
    price: 'Rp. 400.000',
    qty: '1',
    dateTime: 'Konfirmasi Pesanan Produk Sebelum 13-03-2022',
    dateKirim: 'Minggu, 20 Mar 2022',
    ekspedisi: 'J&T Ekspress',
    status: 'Selesai',
    image: require('../assets/product/face-3.jpg'),
  },
  {
    id: 5,
    nmToko: 'TOKO TEST',
    nmBarang: 'SERUM ANTI ACNE BEST SELLER',
    var: '20 ml',
    price: 'Rp. 400.000',
    qty: '1',
    dateTime: 'Konfirmasi Pesanan Produk Sebelum 13-03-2022',
    dateKirim: 'Minggu, 20 Mar 2022',
    ekspedisi: 'J&T Ekspress',
    status: 'Dibatalkan',
    image: require('../assets/product/face-3.jpg'),
  },
  {
    id: 6,
    nmToko: 'TOKO TEST',
    nmBarang: 'SERUM ANTI ACNE BEST SELLER',
    var: '20 ml',
    price: 'Rp. 400.000',
    qty: '1',
    dateTime: 'Konfirmasi Pesanan Produk Sebelum 13-03-2022',
    dateKirim: 'Minggu, 20 Mar 2022',
    ekspedisi: 'J&T Ekspress',
    status: 'Pengembalian',
    image: require('../assets/product/face-3.jpg'),
  },
];

const OrderScreens = ({navigation}) => {
  const [status, setStatus] = useState('all');
  const [dataList, setDataList] = useState(Data);

  const setStatusFilter = status => {
    if (status !== 'all') {
      setDataList([...Data.filter(e => e.status === status)]);
    } else {
      setDataList(Data);
    }
    setStatus(status);
  };
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 15,
          backgroundColor: COLORS.white,
          elevation: 5,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Header.map(e => {
            return (
              <TouchableOpacity
                key={e.status}
                onPress={() => setStatusFilter(e.status)}
                style={{marginHorizontal: 10}}>
                <Text
                  style={
                    (styles.textTab,
                    status === e.status && styles.textActiveTab)
                  }>
                  {e.status}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <FlatList
        data={dataList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: COLORS.white,
              marginVertical: 5,
              paddingTop: 15,
              elevation: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingBottom: 20,
              }}>
              <Text style={{fontSize: 16, color: COLORS.black}}>
                {item.nmToko}
              </Text>
              <Text style={{fontSize: 16, color: '#ff0000'}}>
                {item.status}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderColor: COLORS.grey,
                paddingBottom: 10,
              }}>
              <Image source={item.image} style={{width: 80, height: 80}} />
              <View style={{justifyContent: 'space-between'}}>
                <Text>{item.nmBarang}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{item.var}</Text>
                  <Text>{item.qty}x</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text>{item.price}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: COLORS.grey,
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text>{item.qty} Produk</Text>
              <Text>Subtotal Produk : {item.price}</Text>
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
              onPress={() => navigation.navigate('TrackScreens', {data: item})}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RemixIcon name="ri-truck-fill" color={COLORS.primary} />
                <Text style={{color: COLORS.primary, marginLeft: 5}}>
                  Paket Telah Sampai di Kota Bogor
                </Text>
              </View>
              <RemixIcon name="ri-arrow-right-s-line" />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 1, borderColor: COLORS.grey}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              <Text style={{width: '50%'}}>{item.dateTime}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: 'bold',
                  }}>
                  Pesanan Di Terima
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default OrderScreens;

const styles = StyleSheet.create({
  btnTab: {
    backgroundColor: COLORS.blue,
  },
  btnActiveTab: {
    backgroundColor: COLORS.primary,
  },
  textTab: {color: COLORS.black},
  textActiveTab: {color: COLORS.primary},
});
