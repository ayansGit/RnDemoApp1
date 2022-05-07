import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import Profile from '../screens/main/Profile';
import Dashboard from '../screens/main/Dashboard';


const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
