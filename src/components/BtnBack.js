import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';

const BtnBack = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={props.styles}>
      <RemixIcon
        name="ri-arrow-left-circle-line"
        color={COLORS.primary}
        size="40"
      />
    </TouchableOpacity>
  );
};

export default BtnBack;

const styles = StyleSheet.create({});
