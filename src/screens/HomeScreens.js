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
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';

import Face from '../constant/DataFace';
import Skincare from '../constant/DataSkincare';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderHome from '../components/moleculs/HeaderHome';
import axios from 'axios';
import ListSkincare from '../containers/organism/ListSkincare';
import ListSkincare2 from '../containers/organism/ListSkincare2';
import ListBanner from '../containers/organism/ListBanner';
import ListCategory from '../containers/organism/ListCategory';

const HomeScreens = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    const Token = await AsyncStorage.getItem('token');
    await axios
      .get('https://api-dev.betterjob.id/api/departments', {
        headers: {
          Authorization: 'Bearer ' + Token,
        },
      })
      .then(res => {
        // const storeToken = async () => {
        //   await AsyncStorage.setItem('token', res.data.success.token);
        // };
        // storeToken();
        console.log(res.data);
        setData(res.data);
      })
      .catch(e => {
        console.log(e);
        if (e.response) {
          console.log('response');
          console.log(e.response.data);
        } else if (e.request) {
          console.log('request');
          console.log(e.request.data);
        } else {
          console.log('other');
          console.log(e.message);
        }
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(function () {
      fetchData();
      setRefreshing(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* Header */}
        <HeaderHome />
        {/* Hero Section */}
        <ListBanner />
        {/* Flatlist 1 */}
        <ListCategory />
        <ListSkincare />
        {/* Flatlist 2 */}
        <ListSkincare2 />
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
