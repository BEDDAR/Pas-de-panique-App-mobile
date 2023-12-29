import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const homeStyle = StyleSheet.create({
    

    menu: {
        padding: 15,
        alignItems:'center'
    },

    menuItem: {
        fontSize: 20,
        color:'black',
    },

    bouton:{
        width:300,
        height:80,
        borderRadius: 10,
        margin:20, 
        padding:10,       
        backgroundColor: 'white',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'

        
    }
})

export default homeStyle