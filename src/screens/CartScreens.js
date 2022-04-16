import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../constant/Colors';
import {CartStyles} from '../styles/CartStyles';
import RemixIcon from 'react-native-remix-icon';

const Data = [
  {
    id: 0,
    name: 'facial cleanser',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    price: 600000,
    Image: require('../assets/product/face-3.jpg'),
    select: 'all',
    selected: false,
    quantity: 0,
  },
  {
    id: 1,
    name: 'facial',
    desc: 'facial face vit c serum + lightening',
    var: '20 ml',
    price: 600000,
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
    price: 600000,
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
    price: 600000,
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
    price: 600000,
    Image: require('../assets/product/face-3.jpg'),
    select: 'all',
    selected: false,
    quantity: 0,
  },
];

const CartScreens = ({navigation}) => {
  // const [allData, setAllData] = useState([]);
  // useEffect(() => {
  //   setAllData(Data);
  // }, [Data]);
  // const update = () => {
  //   setAllData(Data);
  // };
  const [qty, setQty] = useState(0);
  // const [status, setStatus] = useState();
  // const [selectedItem, setSelectItem] = useState(false);
  const [selectedItem, setSelectItem] = useState({
    id: 0,
    status: false,
  });
  const [total, setTotal] = useState(0);
  const [statusAll, setStatusAll] = useState(false);

  const onIncrease = id => {
    // const nextProducts = [...total];
    // nextProducts[index].quantity += 1;
    Data[id].quantity = Data[id].quantity + 1;
    setQty(Data[id].quantity + 1);
    setTotal(Data[id].price + total);
  };

  const onDecrease = id => {
    // const nextProducts = [...total];
    if (Data[id].quantity < 1) {
      // nextProducts[index].quantity == 1;
      // setTotal(nextProducts);
      Data[id].quantity = 0;
      Data[id].price = 0;
      setQty(0);
      setTotal(total - Data[id].price);
    } else {
      // nextProducts[index].quantity -= 1;
      // setTotal(nextProducts);
      Data[id].quantity = Data[id].quantity - 1;
      setQty(Data[id].quantity - 1);
      setTotal(total - Data[id].price);
    }
  };
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

  // console.log(allData);
  return (
    <View style={{height: '100%'}}>
      <View style={CartStyles.ContainerHeader}>
        <Text style={{fontSize: 16, color: COLORS.black}}>Produk Pilihan</Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={CartStyles.ContainerCart}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => {
                  item.selected = !item.selected;
                  // setStatus(item.id);
                  // setSelectItem(item.selected);
                  // setSelectItem(!selectedItem);
                  setSelectItem({
                    ...selectedItem,
                    ['id']: item.id,
                    ['status']: item.selected,
                  });
                  // console.log('status: ', item.selected);
                  // console.log('id: ', item.id);
                  // console.log(selectedItem);
                }}>
                <RemixIcon
                  name={
                    item.selected === true
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
                    {item.price}
                  </Text>
                  <Text>{item.quantity}</Text>
                </View>
              </View>
            </View>
            <View style={CartStyles.ContainerBtnAddSub}>
              <View style={CartStyles.BtnAddSub}>
                <TouchableOpacity onPress={() => onDecrease(item.id)}>
                  <RemixIcon
                    name="ri-indeterminate-circle-line"
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity onPress={() => onIncrease(item.id)}>
                  <RemixIcon name="ri-add-circle-line" color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
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
              onPress={() => {
                for (let i = 0; i < Data.length; i++) {
                  Data[i].selected = !Data[i].selected;
                  setStatusAll(!statusAll);
                  // update();
                }
              }}>
              <RemixIcon
                name={
                  statusAll === false
                    ? 'ri-checkbox-blank-line'
                    : 'ri-checkbox-line'
                }
                color={COLORS.grey}
              />
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
                Rp. {total}
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
                Checkout {qty}
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
