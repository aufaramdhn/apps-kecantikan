import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const NotificationScreens = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RemixIcon />
          <Text>Profile</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RemixIcon />
          <RemixIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreens;

const styles = StyleSheet.create({});
