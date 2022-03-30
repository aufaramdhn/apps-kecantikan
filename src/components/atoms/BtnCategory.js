import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const BtnCategory = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnCategory;

const styles = StyleSheet.create({});
