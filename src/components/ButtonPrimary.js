import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';

const ButtonPrimary = props => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={[
            props.style,
            {
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              elevation: 5,
              borderRadius: 10,
              width: '100%',
            },
          ]}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({});
