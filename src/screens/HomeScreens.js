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
import COLORS from '../constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderHome from '../components/moleculs/HeaderHome';
import axios from 'axios';
import ListSkincare from '../containers/organism/ListSkincare';
import ListSkincare2 from '../containers/organism/ListSkincare2';
import ListBanner from '../containers/organism/ListBanner';
// import ListCategory from '../containers/organism/ListCategory';
import {useDispatch} from 'react-redux';
// import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/database';

const HomeScreens = ({navigation}) => {
  // const [item, setItem] = useState('');

  // const reference = firebase
  //   .app()
  //   .database(
  //     'https://crud-4ef1e-default-rtdb.asia-southeast1.firebasedatabase.app/',
  //   )
  //   .ref('item/');

  // const getData = database()
  //   .ref('/item')
  //   .on('value', snapshot => {
  //     console.log('User data: ', snapshot.val());
  //   });

  // useEffect(() => {
  //   setItem(getData);
  // }, []);
  function user() {
    useEffect(() => {
      const getData = database()
        .ref('/item')
        .on('value', snapshot => {
          console.log('User data: ', snapshot.val());
          getData();
        });
    }, []);
  }

  // const [face, setFace] = useState('');
  // const [body, setBody] = useState('');
  // const [hair, setHair] = useState('');
  // const [tooth, setTooth] = useState('');

  // async function getDataFace() {
  //   const dataFace = await firestore().collection('facial').get();
  //   setFace(dataFace.docs.map(item => item.data()));
  // }
  // async function getDataBody() {
  //   const dataBody = await firestore().collection('body').get();
  //   setBody(dataBody.docs.map(item => item.data()));
  // }
  // async function getDataHair() {
  //   const dataHair = await firestore().collection('hair').get();
  //   setHair(dataHair.docs.map(item => item.data()));
  // }
  // async function getDataTooth() {
  //   const dataTooth = await firestore().collection('tooth').get();
  //   setTooth(dataTooth.docs.map(item => item.data()));
  // }
  // useEffect(() => {
  //   getDataFace();
  //   getDataBody();
  //   getDataHair();
  //   getDataTooth();
  // }, []);

  // const Face = [
  //   {
  //     id: 1,
  //     name: 'Cleanser',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/face-1.jpg'),
  //   },
  //   {
  //     id: 2,
  //     name: 'Facial Cleanser',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/face-2.jpg'),
  //   },
  //   {
  //     id: 3,
  //     name: 'Facial Cleanser',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/face-3.jpg'),
  //   },
  //   {
  //     id: 4,
  //     name: 'Facial Cleanser',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/face-4.jpg'),
  //   },
  //   {
  //     id: 5,
  //     name: 'Facial Cleanser',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/face-5.jpg'),
  //   },
  //   {
  //     id: 6,
  //     name: 'Facial Cleanser',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/face-6.jpg'),
  //   },
  // ];

  // const Body = [
  //   {
  //     id: 1,
  //     name: 'Coffe Soap',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/body-1.jpg'),
  //   },
  //   {
  //     id: 2,
  //     name: 'Rice Soap',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/body-2.jpg'),
  //   },
  //   {
  //     id: 3,
  //     name: 'Brownsugar Soap',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/body-3.jpg'),
  //   },
  //   {
  //     id: 4,
  //     name: 'Jicama Soap',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/body-4.jpg'),
  //   },
  //   {
  //     id: 5,
  //     name: 'Fruit Soap',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/body-5.jpg'),
  //   },
  //   {
  //     id: 6,
  //     name: 'Charcoal Soap',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/body-6.jpg'),
  //   },
  // ];
  // const Hair = [
  //   {
  //     id: 1,
  //     name: 'Hair Oil',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/hair-1.jpg'),
  //   },
  //   {
  //     id: 2,
  //     name: 'Shampoo',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/hair-2.jpg'),
  //   },
  //   {
  //     id: 3,
  //     name: 'Hair Serum',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/hair-3.jpg'),
  //   },
  //   {
  //     id: 4,
  //     name: 'Hair Oil',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/hair-4.jpg'),
  //   },
  //   {
  //     id: 5,
  //     name: 'Conditioner',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/hair-5.jpg'),
  //   },
  //   {
  //     id: 6,
  //     name: 'Shampoo',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/hair-6.jpg'),
  //   },
  // ];
  // const Tooth = [
  //   {
  //     id: 1,
  //     name: 'Toothpaste',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/tooth-1.jpg'),
  //   },
  //   {
  //     id: 2,
  //     name: 'Toothpaste',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/tooth-2.jpg'),
  //   },
  //   {
  //     id: 3,
  //     name: 'Toothpaste',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/tooth-3.jpg'),
  //   },
  //   {
  //     id: 4,
  //     name: 'Toothpaste',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/tooth-4.jpg'),
  //   },
  //   {
  //     id: 5,
  //     name: 'Toothpaste',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/tooth-5.jpg'),
  //   },
  //   {
  //     id: 6,
  //     name: 'Toothpaste',
  //     desc: 'Elemis superfood',
  //     price: 'Rp.450.000',
  //     image: require('../assets/product/tooth-6.jpg'),
  //   },
  // ];

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const onHandleChange = dataLempar => {
    dispatch({
      type: 'SET_DATA_NAV',
      inputValue: dataLempar,
    });
  };
  const onHandleNamePage = dataLempar => {
    dispatch({
      type: 'SET_NAME_PAGE',
      inputValue: dataLempar,
    });
  };
  // const signOut = () => {
  //   FirebaseUtil.signOut().catch(e => {
  //     console.log(e);
  //     alert('Something went wrong');
  //   });
  // };

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
    // fetchData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(function () {
      fetchData();
      setRefreshing(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              onHandleChange(getData);
              navigation.navigate('NewScreens');
              onHandleNamePage('Face');
            }}>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Face
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onHandleChange(body);
              navigation.navigate('NewScreens');
              onHandleNamePage('Body');
            }}>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Body
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onHandleChange(hair);
              navigation.navigate('NewScreens');
              onHandleNamePage('Hair');
            }}>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Hair
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onHandleChange(tooth);
              navigation.navigate('NewScreens');
              onHandleNamePage('Tooth');
            }}>
            <Text
              style={{marginHorizontal: 20, fontSize: 18, fontWeight: '400'}}>
              Tooth
            </Text>
          </TouchableOpacity>
        </View>
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
