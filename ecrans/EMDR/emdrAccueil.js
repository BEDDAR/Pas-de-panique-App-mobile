import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity ,ScrollView} from 'react-native';
import emdrStyle from './emdrStyle';

const EmdrAccueil = ({ navigation }) => {

    return (
        <View style={emdrStyle.pageAccuilContenaire}>
            <ScrollView>
                <Text style={{textDecorationLine:'underline',color:"#E649AA",fontSize:18}}
                onPress={() => Linking.openURL('https://www.passeportsante.net/fr/Therapies/Guide/Fiche.aspx?doc=emdr_th')}>
                    Plus d'informations sur la thérapie ?{"\n"}{"\n"}
                    </Text>
                <Text style={emdrStyle.textInstruction}>
                    Sans bouger votre tête, suivre les mouvement de la boule.{"\n"}
                    Pensez en même temps à la situation qui génère des émotions douloureuses.{"\n"}
                    Après cette Séance ces émotions difficiles seront fortement atténuées.{"\n"}
                    N'hésitez-pas à répéter cet exercice pour conforter le résultat.{"\n"}
                </Text>

                <View style={[emdrStyle.point, { alignSelf: 'center' }]}></View>

                <TouchableOpacity style={[emdrStyle.boutonChoix, { alignSelf: 'center' }]} onPress={() => choixCouleur()}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Choisir la couleur de la boule</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[emdrStyle.bouton, { alignSelf: 'center' }]} onPress={() => navigation.navigate('EMDR')}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Appliquer</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default EmdrAccueil