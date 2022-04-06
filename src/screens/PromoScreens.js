import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../constant/Colors';
import RemixIcon from 'react-native-remix-icon';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {NewStyles} from '../styles/NewStyles';

const CardPopuler = ({item, statusRefresh}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <SkeletonContent
      containerStyle={{flex: 1}}
      isLoading={loading === false && statusRefresh === false ? false : true}
      layout={[
        {
          key: 'someId',
          width: 200,
          height: 100,
          alignSelf: 'center',
          marginBottom: 6,
        },
      ]}>
      <TouchableOpacity
        style={NewStyles.containerCard}
        onPress={() => navigation.navigate('DetailScreens', {data: item})}>
        <View>
          <Image source={item.image} style={NewStyles.image} />
          <Text style={NewStyles.textTitle}>{item.name}</Text>
          <Text style={{fontSize: 14, marginLeft: 10}}>{item.desc}</Text>
          <View style={NewStyles.wrapPrice}>
            <Text style={{fontSize: 18, marginLeft: 10, color: COLORS.green}}>
              {item.price}
            </Text>
            <View style={NewStyles.containerBtn}>
              <RemixIcon name="ri-shopping-bag-line" size="20" color="#fff" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SkeletonContent>
  );
};

const PromoScreens = ({statusRefresh}) => {
  const NavReducer = useSelector(state => state.NavReducer);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <Image
          source={require('../assets/banner/banner.jpg')}
          style={{width: '100%', height: 200}}
        />
      </View>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 20, backgroundColor: '#fff'}}
        data={NavReducer.dataNav}
        renderItem={({item}) => (
          <CardPopuler item={item} statusRefresh={refreshing} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </ScrollView>
  );
};

export default PromoScreens;

const styles = StyleSheet.create({});
