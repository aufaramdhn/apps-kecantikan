import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';

const SearchHome = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 30,
          paddingHorizontal: 10,
          height: 40,
          backgroundColor: 'white',
        }}>
        <RemixIcon name="ri-search-line" />
        <TextInput
          placeholder="Search"
          style={{
            width: '70%',
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          height: 40,
          width: 40,
          borderRadius: 40 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
        }}>
        <RemixIcon name="ri-filter-off-line" size="28" color="#1d1d1d" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHome;

const styles = StyleSheet.create({});
