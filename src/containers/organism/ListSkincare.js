import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Skincare from '../../constant/DataSkincare';
import COLORS from '../../constant/Colors';
import RemixIcon from 'react-native-remix-icon';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const ListSkincare = () => {
  const [first, setfirst] = useState('');
  async function getDataFirebase() {
    const datafacial = await firestore().collection('facial').get();
    // console.log(datafacial.docs.map(item => item.data()));
    setfirst(datafacial.docs.map(item => item.data()));
  }

  useEffect(() => {
    // const subscriber = firestore()
    //   .collection('facial')
    //   .onSnapshot(document => console.log('user data:', document));

    // console.log(subscriber());
    // return () => subscriber;
    getDataFirebase();
  }, []);

  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={first}
        keyExtractor={item => item.id}
        style={{paddingLeft: 20, paddingRight: 20}}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#fff',
              margin: 5,
              alignItems: 'center',
              borderRadius: 20,
              elevation: 5,
            }}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailScreens', {data: item})
                }>
                <Image
                  source={{uri: item.image}}
                  style={{width: 165, height: 160, borderRadius: 20}}
                />
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 10,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 14, marginLeft: 10, width: '60%'}}>
                  {item.desc}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 18, marginLeft: 10, color: COLORS.green}}>
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
                    <RemixIcon
                      name="ri-shopping-bag-line"
                      size="20"
                      color="#fff"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListSkincare;

const styles = StyleSheet.create({});
