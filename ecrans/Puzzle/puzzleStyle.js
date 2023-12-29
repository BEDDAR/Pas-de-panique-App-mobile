import { StyleSheet } from "react-native";

const puzzleStyle = StyleSheet.create({
    
    contenair:{
        flex:1,
        padding:20,
        flexDirection:'column',
        justifyContent:'space-around',
    },

    puzzlePlateau:{
        marginTop:50,
        marginLeft:15,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignSelf:'center'
    },

    bouton: {
        backgroundColor: "#D24BC3",
        width: 130,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    textBouton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },

    displayBouton:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
      }
})

export default puzzleStyle