import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../../constant/Colors';

const FlowerMoleculs = props => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <RemixIcon name={props.icon} size="38" />
      <Text style={{fontSize: 18, fontWeight: '500', color: '#1d1d1d'}}>
        {props.name}
      </Text>
    </View>
  );
};

export default FlowerMoleculs;

const styles = StyleSheet.create({});
