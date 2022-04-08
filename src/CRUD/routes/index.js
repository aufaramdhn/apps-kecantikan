import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, TambahKontak, Login, Loading} from '../pages';
import {LoginContext} from '../utils/LoginProvider';

const Stack = createNativeStackNavigator();

export default function Router() {
  const {user, isLoading} = useContext(LoginContext);
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tambah" component={TambahKontak} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
      {isLoading ? (
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{headerShown: false}}
        />
      ) : user ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}
