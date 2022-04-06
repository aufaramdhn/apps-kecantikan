import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import {OnBoardStyles} from '../styles/OnBoardStyles';

const OnBoardScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 2,
        }}>
        <Image
          source={require('../assets/product/face-4.jpg')}
          style={OnBoardStyles.image}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={OnBoardStyles.textOnBoard}>
          Let Us Reward You, Naturally
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreens')}>
          <View style={OnBoardStyles.containerButton}>
            <RemixIcon name="ri-arrow-right-s-line" color="white" size="30" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreens;

const styles = StyleSheet.create({});
