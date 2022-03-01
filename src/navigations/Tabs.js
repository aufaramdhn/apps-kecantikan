import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreens, ProfileScreens} from '../screens';
import RemixIcon from 'react-native-remix-icon';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ri-home-3-fill' : 'ri-home-3-line';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ri-user-3-fill' : 'ri-user-line';
          }

          // You can return any component that you like here!
          return <RemixIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="Settings" component={ProfileScreens} />
    </Tab.Navigator>
  );
};

export default Tabs;
