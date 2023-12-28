import { Dimensions, StyleSheet } from "react-native";
const {height,width}=Dimensions.get('window')
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const homeStyle = StyleSheet.create({

    menu: {
        height:hp(100),
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