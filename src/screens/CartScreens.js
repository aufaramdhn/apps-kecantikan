import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constant/Colors';
import {CartStyles} from '../styles/CartStyles';
import RemixIcon from 'react-native-remix-icon';

const Data = [
  {
    id: 1,
    name: 'facial cleanser',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/product/face-3.jpg'),
    select: 'all',
    selected: false,
    quantity: 0,
  },
  {
    id: 2,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/product/face-3.jpg'),
    select: 'all',
    selected: false,
    quantity: 0,
  },
  {
    id: 3,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/product/face-3.jpg'),
    select: 'all',
    selected: false,
    quantity: 0,
  },
  {
    id: 4,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/product/face-3.jpg'),
    select: 'all',
    selected: false,
    quantity: 0,
  },
  {
    id: 5,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    Price: 'Rp. 600.000',
    Image: require('../assets/product/face-3.jpg'),
    select: 'all',
    selected: false,
    quantity: 0,
  },
];

const ListItem = ({item}) => {
  const [total, setTotal] = useState(1);
  const [status, setStatus] = useState();
  const [selectedItem, setSelectItem] = useState(false);

  const onHandleChangeIncrease = () => {
    // const nextProducts = [...total];
    // nextProducts[index].quantity += 1;
    setTotal(total + 1);
  };
  const onHandleChangeDecrease = () => {
    // const nextProducts = [...total];
    if (total < 2) {
      // nextProducts[index].quantity == 1;
      // setTotal(nextProducts);
      setTotal(1);
    } else {
      // nextProducts[index].quantity -= 1;
      // setTotal(nextProducts);
      setTotal(total - 1);
    }
  };

  return (
    <View style={CartStyles.ContainerCart}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => {
            setStatus(item.id);
            setSelectItem(item.selected);
            setSelectItem(!selectedItem);
            console.log(selectedItem);
          }}>
          <RemixIcon
            name={
              status === item.id && selectedItem === true
                ? 'ri-checkbox-line'
                : 'ri-checkbox-blank-line'
            }
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <Image source={item.Image} style={{width: 70, height: 70}} />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: COLORS.black,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: COLORS.primary,
            }}>
            {item.desc}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: COLORS.black,
            }}>
            Variasi: {item.var}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'red',
              }}>
              {item.Price}
            </Text>
            <Text>{total}</Text>
          </View>
        </View>
      </View>
      <View style={CartStyles.ContainerBtnAddSub}>
        <View style={CartStyles.BtnAddSub}>
          <TouchableOpacity onPress={() => onHandleChangeDecrease()}>
            <RemixIcon
              name="ri-indeterminate-circle-line"
              color={COLORS.primary}
            />
          </TouchableOpacity>
          <Text>{total}</Text>
          <TouchableOpacity onPress={() => onHandleChangeIncrease()}>
            <RemixIcon name="ri-add-circle-line" color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CartScreens = () => {
  // const [selectAll, setSelectAll] = useState();
  // const [products, setProducts] = useState(Data);
  // const onSubtract = (item, index) => {
  //   const nextProducts = [...products];
  //   nextProducts[index].quantity -= 1;
  //   setProducts(nextProducts);
  // };

  // const onAdd = (item, index) => {
  //   const nextProducts = [...products];
  //   nextProducts[index].quantity += 1;
  //   setProducts(nextProducts);
  // };

  // let totalQuantity = 0;
  // let totalPrice = 0;
  // Data.forEach(item => {
  //   totalQuantity += item.quantity;
  //   totalPrice += item.quantity * item.Price;
  // });

  return (
    <View style={{height: '100%'}}>
      <View style={CartStyles.ContainerHeader}>
        <Text style={{fontSize: 16, color: COLORS.black}}>Produk Pilihan</Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem item={item} />}
      />
      <View
        style={{
          backgroundColor: COLORS.white,
        }}>
        <View style={CartStyles.ContainerFooter}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{marginRight: 5}}>
              <RemixIcon name="ri-checkbox-blank-line" color={COLORS.grey} />
            </TouchableOpacity>
            <Text>Voucher</Text>
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Masukan Kode Voucher</Text>
            <RemixIcon name="ri-arrow-right-s-line" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{marginRight: 5}}
              onPress={() => navigation.navigate()}>
              <RemixIcon name="ri-checkbox-blank-line" color={COLORS.grey} />
            </TouchableOpacity>
            <Text>Semua</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: 8,
              }}>
              <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
                Rp. 1.440.000
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.primary,
                  fontWeight: 'bold',
                }}>
                Dapatkan Poin (150)
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                paddingVertical: 15,
                paddingHorizontal: 20,
              }}
              onPress={() => navigation.navigate('ShoppingBagScreens')}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                Checkout (5)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreens;

const styles = StyleSheet.create({});
