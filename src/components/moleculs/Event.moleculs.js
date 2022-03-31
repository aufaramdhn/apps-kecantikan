import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const EventFree = props => {
  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={props.onPress}>
      <Image
        source={props.img}
        style={{width: 50, height: 50, borderRadius: 50 / 2}}
      />
      <Text style={{fontSize: 14, fontWeight: '400'}}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default EventFree;

const styles = StyleSheet.create({});
