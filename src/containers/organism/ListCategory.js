import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BtnCategory from '../../components/atoms/BtnCategory';
import {useNavigation} from '@react-navigation/native';

const ListCategory = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
      }}>
      <BtnCategory
        name="Face"
        onPress={() => navigation.navigate('NewScreens')}
      />
      <BtnCategory name="Body" />
      <BtnCategory name="Hair" />
      <BtnCategory name="Tooth" />
    </View>
  );
};

export default ListCategory;

const styles = StyleSheet.create({});
