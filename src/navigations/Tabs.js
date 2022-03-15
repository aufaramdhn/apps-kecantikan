import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreens,
  ProfileScreens,
  MessagesScreens,
  CartScreens,
} from '../screens';
import RemixIcon from 'react-native-remix-icon';
import COLORS from '../constant/Colors';
import BtnBack from '../components/BtnBack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ri-home-3-fill' : 'ri-home-3-line';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'ri-chat-3-fill' : 'ri-chat-3-line';
          } else if (route.name === 'Cart') {
            iconName = focused
              ? 'ri-shopping-cart-fill'
              : 'ri-shopping-cart-line';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ri-user-fill' : 'ri-user-line';
          }

          // You can return any component that you like here!
          return <RemixIcon name={iconName} size="30" color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: '10%',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreens}
        options={{
          headerStyle: {
            backgroundColor: 'white',
            elevation: 0,
          },
          headerShown: true,
          headerLeft: () => {
            return <BtnBack styles={{marginLeft: 10}} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreens}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreens}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
