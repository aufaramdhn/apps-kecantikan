import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constant/Colors';

const Messages = [
  {
    id: '1',
    userName: 'John Doe',
    userImg: require('../assets/img.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Hey there, this is my test fot a post of my chat',
  },
  {
    id: '2',
    userName: 'Arthur',
    userImg: require('../assets/img.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Hey there, this is my test fot a post of my chat',
  },
  {
    id: '3',
    userName: 'Tessia',
    userImg: require('../assets/img.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Hey there, this is my test fot a post of my chat',
  },
  {
    id: '4',
    userName: 'Salsa',
    userImg: require('../assets/img.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Hey there, this is my test fot a post of my chat',
  },
  {
    id: '5',
    userName: 'jenner',
    userImg: require('../assets/img.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Hey there, this is my test fot a post of my chat',
  },
];

const Msg = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: COLORS.grey,
      }}
      onPress={() =>
        navigation.navigate('ChatScreens', {userName: item.userName})
      }>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={item.userImg}
          style={{width: 70, height: 70, borderRadius: 70 / 2}}
        />
        <View
          style={{
            marginHorizontal: 10,
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
              {item.userName}
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', color: COLORS.black}}>
              {item.messageTime}
            </Text>
          </View>
          <View>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: COLORS.black}}>
              {item.messageText}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MessagesScreens = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Msg item={item} />}
      />
    </View>
  );
};

export default MessagesScreens;

const styles = StyleSheet.create({});
