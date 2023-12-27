import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Home/home'
import Parametres from '../Parametres/parametres'

const Tab = createMaterialTopTabNavigator();

const TabNavigator=()=>{
    return (
     
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 20, color:'white' },
        tabBarStyle: { backgroundColor: '#BC63FF' },
        
      }}>
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Paramètres" component={Parametres} />
      </Tab.Navigator>
    
    )
}

export default TabNavigator