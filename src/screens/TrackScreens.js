import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const TrackScreens = ({route, navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={route.params.data.image}
          style={{width: 50, height: 50}}
        />
        <View style={{}}>
          <Text>{route.params.data.dateKirim}</Text>
          <Text>Di kirim dengan {route.params.data.ekspedisi}</Text>
        </View>
      </View>
    </View>
  );
};

export default TrackScreens;

const styles = StyleSheet.create({});
