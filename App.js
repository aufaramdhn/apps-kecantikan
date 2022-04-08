import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  //   OnBoardScreens,
  //   RegisterScreens,
  LoginScreens,
  //   PaymentScreens,
  //   DetailScreens,
  //   EditProfileScreens,
  //   NewScreens,
  //   ShoppingBagScreens,
  //   Component1,
  //   MessagesScreens,
  //   ChatScreens,
  //   NotificationScreens,
  //   OrderScreens,
  //   CartScreens,
  //   TrackScreens,
  //   VoucherScreens,
  //   PromoScreens,
} from './src/screens';
import Tabs from './src/navigations/Tabs';
// import BtnBack from './src/components/atoms/BtnBack';
// import BtnRightEditProfile from './src/components/atoms/BtnRightEditProfile';
// import BtnRightChat from './src/components/atoms/BtnRightChat';
// import BtnBackArrow from './src/components/atoms/BtnBackArrow';
// import BtnCart from './src/components/atoms/BtnCart';
// import BtnRightTrack from './src/components/atoms/BtnRightTrack';
// import {useSelector} from 'react-redux';
// import TextInputAtoms from './src/components/atoms/TextInputAtoms';
// import Router from './src/CRUD/routes';
import LoginProvider, {LoginContext} from './src/utils/LoginProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  // const NamePage = useSelector(state => state.NamePage);
  const {user, isLoading} = useContext(LoginContext);
  return (
    <LoginProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
          name="OnBoardScreens"
          component={OnBoardScreens}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreens"
          component={RegisterScreens}
          options={{
            headerShown: false,
          }}
        /> */}
          {user ? (
            <Stack.Screen
              name="HomeScreens"
              component={Tabs}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="LoginScreens"
              component={LoginScreens}
              options={{
                headerShown: false,
              }}
            />
          )}

          {/* <Stack.Screen
          name="PaymentScreens"
          component={PaymentScreens}
          options={{
            headerShown: true,
            title: 'Payment Method',
            headerLeft: () => {
              return <BtnBack styles={{marginRight: 10}} />;
            },
          }}
        />
        <Stack.Screen
          name="DetailScreens"
          component={DetailScreens}
          options={{
            headerShown: true,
            title: null,
            headerLeft: () => {
              return <BtnBackArrow />;
            },
          }}
        />
        <Stack.Screen
          name="NewScreens"
          component={NewScreens}
          options={{
            headerShown: true,
            title: NamePage.namePage,
            headerLeft: () => {
              return <BtnBack />;
            },
          }}
        />
        <Stack.Screen
          name="PromoScreens"
          component={PromoScreens}
          options={{
            headerShown: true,
            title: NamePage.namePage,
            headerLeft: () => {
              return <BtnBack />;
            },
            headerRight: () => {
              return <TextInputAtoms />;
            },
          }}
        />
        <Stack.Screen
          name="ShoppingBagScreens"
          component={ShoppingBagScreens}
          options={{
            title: 'Shopping Bag',
            headerLeft: () => {
              return <BtnBackArrow />;
            },
            headerRight: () => {
              return <BtnCart onPress={'CartScreens'} />;
            },
          }}
        />
        <Stack.Screen
          name="EditProfileScreens"
          component={EditProfileScreens}
          options={{
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              color: 'black',
            },
            title: ' Profile',
            headerShown: true,
            headerLeft: () => {
              return <BtnBack />;
            },
            headerRight: () => {
              return <BtnRightEditProfile />;
            },
          }}
        />
        <Stack.Screen
          name="Component1"
          component={Component1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MessagesScreens" component={MessagesScreens} />
        <Stack.Screen
          name="NotificationScreens"
          component={NotificationScreens}
          options={{
            headerShown: true,
            title: 'Notification',
            headerLeft: () => {
              return <BtnBack styles={{marginRight: 10}} />;
            },
          }}
        />
        <Stack.Screen
          name="ChatScreens"
          component={ChatScreens}
          options={({route}) => ({
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            title: route.params.userName,
            headerRight: () => {
              return <BtnRightChat />;
            },
          })}
        />
        <Stack.Screen
          name="OrderScreens"
          component={OrderScreens}
          options={({route}) => ({
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            title: 'Pesanan Saya',
            headerLeft: () => {
              return <BtnBack styles={{marginRight: 10}} />;
            },
          })}
        />
        <Stack.Screen
          name="CartScreens"
          component={CartScreens}
          options={{
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              color: 'black',
            },
            title: 'Dikirim',
            headerShown: true,
            headerLeft: () => {
              return <BtnBack styles={{marginRight: 10}} />;
            },
          }}
        />
        <Stack.Screen
          name="TrackScreens"
          component={TrackScreens}
          options={({route}) => ({
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            title: route.params.data.status,
            headerLeft: () => {
              return <BtnBack styles={{marginRight: 10}} />;
            },
            headerRight: () => {
              return <BtnRightTrack />;
            },
          })}
        />
        <Stack.Screen
          name="VoucherScreens"
          component={VoucherScreens}
          options={({route}) => ({
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            title: 'Voucher',
            headerLeft: () => {
              return <BtnBack styles={{marginRight: 10}} />;
            },
            headerRight: () => {
              return <TextInputAtoms />;
            },
          })}
        /> */}
        </Stack.Navigator>
        {/* <Router /> */}
      </NavigationContainer>
    </LoginProvider>
  );
}
