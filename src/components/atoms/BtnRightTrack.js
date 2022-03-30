import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../../constant/Colors';

const BtnRightTrack = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate()}
        style={{paddingHorizontal: 10}}>
        <RemixIcon
          name="ri-customer-service-2-fill"
          color={COLORS.primary}
          size="28"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <RemixIcon name="ri-question-line" color={COLORS.primary} size="28" />
      </TouchableOpacity>
    </View>
  );
};

export default BtnRightTrack;
