import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
// import DrawerNavigationMenu from '../components/DrawerNavigationMenu';
import Profile from '../screens/main/Profile';
import Dashboard from '../screens/main/Dashboard';

const Drawer = createDrawerNavigator();

const isLargeScreen = Dimensions.get('window').width >= 768;

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      // drawerContent={props => <DrawerNavigationMenu {...props} />}
      screenOptions={{ headerShown: false }}
      drawerStyle={isLargeScreen ? { width: '60%' } : null}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
