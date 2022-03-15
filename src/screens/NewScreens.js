import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import COLORS from '../constant/Colors';
import RemixIcon from 'react-native-remix-icon';
import NewFace from '../constant/NewFace';
import {useNavigation} from '@react-navigation/native';

const CardPopuler = ({item}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        margin: 5,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 5,
        marginBottom: 20,
      }}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailScreens', {data: item})}>
          <Image
            source={item.image}
            style={{width: 165, height: 160, borderRadius: 20}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
        <Text style={{fontSize: 14, marginLeft: 10}}>{item.desc}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, marginLeft: 10, color: COLORS.green}}>
            {item.price}
          </Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 15,
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              backgroundColor: COLORS.primary,
            }}>
            <RemixIcon name="ri-shopping-bag-line" size="20" color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

const NewScreens = () => {
  return (
    <FlatList
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      keyExtractor={item => item.id}
      contentContainerStyle={{padding: 20, backgroundColor: '#fff'}}
      data={NewFace}
      renderItem={({item}) => <CardPopuler item={item} />}
    />
  );
};

export default NewScreens;

const styles = StyleSheet.create({});
