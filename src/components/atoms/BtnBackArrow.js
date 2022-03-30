import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../../constant/Colors';
import {useNavigation} from '@react-navigation/native';

const BtnBackArrow = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={props.styles}>
      <RemixIcon name="ri-arrow-left-s-line" color={COLORS.black} size="30" />
    </TouchableOpacity>
  );
};

export default BtnBackArrow;

const styles = StyleSheet.create({});
