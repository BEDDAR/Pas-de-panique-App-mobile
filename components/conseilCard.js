import React from 'react'
import {View, Text, FlatList, StyleSheet, SafeAreaView, useWindowDimensions,Platform} from 'react-native'


const ConseilCard = ({id,text,subText}) => {
    const width= useWindowDimensions().width
    return (
        
        <SafeAreaView style={[styles.card,{width:width-30}]}> 
           <Text style={{fontWeight:'bold',fontSize:30}}>{text}{'\n'}{'\n'}</Text>
           <Text style={{fontSize:20}}>{subText}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    card: {
        backgroundColor:"#E649AA",
        borderRadius:16,
        borderWidth:2,
        padding:16 ,
        margin:15,
        ...Platform.select({
            ios:{
                shadowOffset:{width:2,height:2},
                shadowColor:"#333",
                shadowOpacity:0.3,
                shadowRadius:4
            },
            android:{
                elevation:5
            }
        })
    }

})
export default ConseilCard