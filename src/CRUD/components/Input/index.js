import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={[styles.textInput, props.styles]}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#1d1d1d',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c7c7c7',
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
});
