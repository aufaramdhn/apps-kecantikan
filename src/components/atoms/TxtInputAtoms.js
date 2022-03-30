import {Text, View, TextInput} from 'react-native';
import React from 'react';

const TxtInputAtoms = props => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{marginBottom: 10, marginHorizontal: 10, color: 'black'}}>
        {props.title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 2,
            width: '95%',
            marginHorizontal: 10,
            borderRadius: 10,
            borderColor: '#c7c7c7',
          }}>
          <TextInput
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            style={props.style}
          />
        </View>
      </View>
    </View>
  );
};

export default TxtInputAtoms;
