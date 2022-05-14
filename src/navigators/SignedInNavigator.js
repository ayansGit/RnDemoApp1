import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import Profile from '../screens/main/Profile';
import Dashboard from '../screens/main/Dashboard';
import Speciality from '../screens/main/Speciality';
import AddSpeciality from '../screens/main/AddSpeciality';
import Appointments from '../screens/main/Appointments'



const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Speciality" component={Speciality} />
      <Stack.Screen name="AddSpeciality" component={AddSpeciality} />
      <Stack.Screen name="Appointments" component={Appointments} />
    </Stack.Navigator>
  );
}
