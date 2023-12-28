import { StyleSheet } from "react-native";

const emdrStyle = StyleSheet.create({

    point: {
        height: 80,
        width: 80,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    contenaire: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    bouton: {
        backgroundColor:"#BC63FF",
        width:150,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        margin:20
    
    }
})

export default emdrStyle