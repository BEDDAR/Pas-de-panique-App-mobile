import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import homeStyle from './homeStyle'
const Home=({navigation})=>{
    return (
        <View style={homeStyle.menu}>
            <TouchableOpacity style={homeStyle.bouton} onPress={()=>navigation.navigate('Conseils')}>
                <Text style={homeStyle.menuItem}>
                    Pendant une attaque de panique
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyle.bouton} onPress={()=>navigation.navigate('EMDR')}>
                <Text style={homeStyle.menuItem}>
                    Thérapie EMDR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyle.bouton} onPress={()=>navigation.navigate('Puzzle')}>
                <Text style={homeStyle.menuItem}>
                    Jouer au puzzle
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyle.bouton} onPress={()=>navigation.navigate('Compter')}>
                <Text style={homeStyle.menuItem}>
                    Compter
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Home