import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from '../ecrans/TabNavigator/tabNavigator'
import EMDR from '../ecrans/EMDR/emdr'
import Conseils from '../ecrans/Conseils/conseils'
import Puzzle from '../ecrans/Puzzle/puzzle'
import Compter from '../ecrans/Compter/Compter'
const Stack =createNativeStackNavigator();

const Routes = ()=>{
 return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='topTabNavigator' screenOptions={{headerShown:false}}>
        <Stack.Screen name="topTabNavigator" component={TabNavigator}/>
        <Stack.Screen name="EMDR" component={EMDR}/>
        <Stack.Screen name="Conseils" component={Conseils}/>
        <Stack.Screen name="Puzzle" component={Puzzle}/>
        <Stack.Screen name="Compter" component={Compter}/>
      </Stack.Navigator>
    </NavigationContainer>
 )
}

export default Routes