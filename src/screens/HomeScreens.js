import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import Swiper from 'react-native-swiper';
import Face from '../constant/DataFace';
import Skincare from '../constant/DataSkincare';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderHome from '../components/moleculs/HeaderHome';

const HomeScreens = ({navigation}) => {
  async function fetchData() {
    const Token = await AsyncStorage.getItem('token');
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <HeaderHome />
        {/* Hero Section */}
        <View style={{flex: 1, marginTop: 30}}>
          <Swiper
            autoplay
            autoplayTime={5}
            height={200}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 5,
                  height: 5,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="stretch"
                source={require('../assets/banner.jpg')}
              />
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="stretch"
                source={require('../assets/banner1.jpg')}
              />
            </View>
          </Swiper>
        </View>

        {/* Flatlist 1 */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('NewScreens')}>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Face
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Body
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Hair
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Tooth
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Skincare}
            keyExtractor={item => item.id}
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
                    onPress={() => navigation.navigate('DetailScreens')}>
                    <Image
                      source={item.image}
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
                    <Text style={{fontSize: 14, marginLeft: 10}}>
                      {item.desc}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 18, marginLeft: 10}}>
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
        {/* Flatlist 2 */}

        <View style={{marginHorizontal: 15}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              marginTop: 30,
              marginBottom: 13,
            }}>
            Terlaris
          </Text>
          {Face.map(item => {
            return (
              <View
                key={item.id}
                style={{flexDirection: 'row', marginVertical: 10}}>
                <View>
                  <Image
                    source={item.image}
                    style={{width: 80, height: 80, borderRadius: 15}}
                  />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#545454'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '78%',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#545454',
                      }}>
                      {item.desc}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                        color: '#545454',
                      }}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  backContainer: {
    paddingBottom: 20,
    flex: 1,
  },
  containerFood: {
    backgroundColor: COLORS.lightGray,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    paddingBottom: 20,
    elevation: 5,
  },
});
