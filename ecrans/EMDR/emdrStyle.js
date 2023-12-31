import { StyleSheet } from "react-native";

const emdrStyle = StyleSheet.create({

    point: {
        height: 80,
        width: 80,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    contenaire: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    bouton: {
        backgroundColor: "#2FC19F",
        width: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20

    },

    pageAccuilContenaire:{
        flex:1,
        padding:20,
        justifyContent:'space-around'
    },

    boutonChoix: {
        backgroundColor: "#2FC19F",
        width: 270,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20,
    },

    textInstruction: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'

    }
})

export default emdrStyle