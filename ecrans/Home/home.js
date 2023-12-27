import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import homeStyle from './homeStyle'
const Home=({navigation})=>{
    return (
        <View style={homeStyle.menu}>
            <TouchableOpacity onPress={()=>navigation.navigate('EMDR')}>
                <Text style={homeStyle.menuItem}>
                    Thérapie EMDR
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home