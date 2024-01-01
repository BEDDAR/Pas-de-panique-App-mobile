import React from 'react'
import { Text, TouchableOpacity, ScrollView, View, useWindowDimensions } from 'react-native'
import homeStyle from './homeStyle'
import Conseil_SVG from '../../outils/images/svg/undraw_hey_email_liaa.svg'
import Eye_Svg from '../../outils/images/svg/undraw_surveillance_re_8tkl.svg'
import Puzzle_SVG from '../../outils/images/svg/undraw_process_re_gws7.svg'
import Musique_SVG from '../../outils/images/svg/undraw_meditating_re_aiqa.svg'


const Home = ({ navigation }) => {

    return (
        <View style={homeStyle.menu}>
            <ScrollView>
                <TouchableOpacity style={homeStyle.bouton} onPress={() => navigation.navigate('Conseils')}>
                    <Text style={homeStyle.menuItem}>
                        Pendant une attaque {"\n"} de panique
                    </Text>
                    <Conseil_SVG width={60} height={60}></Conseil_SVG>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.bouton} onPress={() => navigation.navigate('EmdrAccueil')}>
                    <Text style={homeStyle.menuItem}>
                        Thérapie EMDR
                    </Text>
                    <Eye_Svg width={60} height={60}></Eye_Svg>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.bouton} onPress={() => navigation.navigate('Puzzle')}>
                    <Text style={homeStyle.menuItem}>
                        Jouer au puzzle
                    </Text>
                    <Puzzle_SVG width={60} height={60}></Puzzle_SVG>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.bouton} onPress={() => navigation.navigate('MusiqueTibetain')}>
                    <Text style={homeStyle.menuItem}>
                        Musique tibétain
                    </Text>
                    <Musique_SVG width={60} height={60}></Musique_SVG>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Home