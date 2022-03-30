import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlowerMoleculs from '../../components/moleculs/Flower.moleculs';

const Flower = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}>
      <FlowerMoleculs />
      <FlowerMoleculs />
      <FlowerMoleculs />
    </View>
  );
};

export default Flower;

const styles = StyleSheet.create({});
