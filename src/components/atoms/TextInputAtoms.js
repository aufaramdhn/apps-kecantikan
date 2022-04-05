import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../../constant/Colors';

const TextInputAtoms = () => {
  return (
    <TextInput
      style={{
        backgroundColor: COLORS.grey,
        width: '85%',
        borderRadius: 10,
        height: 40,
        color: COLORS.white,
        fontSize: 16,
      }}
    />
  );
};

export default TextInputAtoms;

const styles = StyleSheet.create({});
