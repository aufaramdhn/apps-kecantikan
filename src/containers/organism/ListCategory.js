import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BtnCategory from '../../components/atoms/BtnCategory';

const ListCategory = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
      }}>
      <BtnCategory name="Face" />
      <BtnCategory name="Body" />
      <BtnCategory name="Hair" />
      <BtnCategory name="Tooth" />
    </View>
  );
};

export default ListCategory;

const styles = StyleSheet.create({});
