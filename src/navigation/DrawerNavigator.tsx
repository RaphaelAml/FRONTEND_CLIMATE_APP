import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../navigation/TabNavigator'; // Importar o TabNavigator
import SettingsScreen from '../screens/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
