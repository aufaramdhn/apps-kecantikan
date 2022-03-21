import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';
import RemixIcon from 'react-native-remix-icon';

const Date = [
  {
    id: 1,
    date: 'Hari ini 13.00',
    desc: 'Paket telah di kirim dari gudang CIBINONG kota tujuan',
  },
  {
    id: 2,
    date: 'Hari ini 12.00',
    desc: 'Paket telah di kirim dari gudang BOGOR kota tujuan',
  },
  {
    id: 3,
    date: 'Hari ini 10.00',
    desc: 'Paket telah di kirim dari gudang Sukabumi kota tujuan',
  },
  {
    id: 4,
    date: 'Hari ini 10.00',
    desc: 'Paket telah di kirim dari gudang Cikampek kota tujuan',
  },
  {
    id: 5,
    date: '19 Mar 00.00',
    desc: 'Paket telah di kirim dari gudang Bandung kota tujuan',
  },
  {
    id: 6,
    date: '18 Mar 14.00',
    desc: 'Paket telah di kirim dari gudang Cirebon kota tujuan',
  },
  {
    id: 7,
    date: '18 Mar 07.00',
    desc: 'Pengirim telah mengatur pengiriman. Menunggu paket di serahkan ke pihak jasa kirim.',
  },
];

const TrackScreens = ({route, navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            marginHorizontal: 20,
            marginVertical: 30,
            padding: 25,
            elevation: 5,
          }}>
          <Image
            source={route.params.data.image}
            style={{width: 70, height: 70, marginRight: 5}}
          />
          <View style={{}}>
            <Text style={{fontSize: 18}}>Estimasi di terima sebelum </Text>
            <Text
              style={{fontSize: 18, color: COLORS.primary, marginVertical: 3}}>
              {route.params.data.dateKirim}
            </Text>
            <Text style={{fontSize: 16}}>
              Di kirim dengan {route.params.data.ekspedisi}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: 20,
            marginBottom: 20,
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Text>No. Resi</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 5}}>JP18763548930</Text>
              <Text>Salin</Text>
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            {Date.map(e => {
              return (
                <View
                  key={e.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      width: '18%',
                      paddingBottom: 20,
                      borderRightWidth: 3,
                      borderColor: COLORS.grey,
                    }}>
                    {e.date}
                  </Text>
                  <View style={{position: 'absolute', left: 81, top: -5}}>
                    <RemixIcon
                      name="ri-checkbox-blank-circle-fill"
                      size="20"
                      color={COLORS.primary}
                    />
                  </View>
                  {/* <View
                  style={{
                    Width: 1,
                    height: '100%',
                    backgroundColor: COLORS.primary,
                  }}
                /> */}
                  <Text
                    style={{
                      width: '60%',
                      paddingBottom: 20,
                      marginLeft: 20,
                      color: COLORS.primary,
                    }}>
                    {e.desc}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TrackScreens;

const styles = StyleSheet.create({});
