import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from '../ecrans/TabNavigator/tabNavigator'
import EMDR from '../ecrans/EMDR/emdr'
const Stack =createNativeStackNavigator();

const Routes = ()=>{
 return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='topTabNavigator' screenOptions={{headerShown:false}}>
        <Stack.Screen name="topTabNavigator" component={TabNavigator}/>
        <Stack.Screen name="EMDR" component={EMDR}/>
      </Stack.Navigator>
    </NavigationContainer>
 )
}

export default Routes