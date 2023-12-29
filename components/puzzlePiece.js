import React from 'react'
import { StyleSheet,View,Text, TouchableOpacity} from 'react-native'


const PuzzlePiece =({name,myFunction})=>{
    return(
        <TouchableOpacity onPress={myFunction}>
        <View style={[stylePiece.piece,{backgroundColor: name?"#2FC19F":"#707079"}]}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>{name}</Text>
        </View>
        </TouchableOpacity>
    )
}
const stylePiece=StyleSheet.create({

piece:{
    width:70,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    margin:2,
    borderRadius:4,
}

})

export default PuzzlePiece
