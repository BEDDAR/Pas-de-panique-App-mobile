import React, { Component } from 'react';
import { View, Animated, Text, Dimensions, Easing, SafeAreaView, TouchableOpacity } from 'react-native';
import emdrStyle from './emdrStyle';

var { width } = Dimensions.get('window');
export default class EMDR extends Component {

    state = {
        xValue: new Animated.Value(0),
        stopAnimation: false
    }

    animer = () => {
        Animated.timing(this.state.xValue, {
            toValue: width - 55,
            duration: 3000,
            easing: Easing.linear,
            // easing: Easing.back(),     
            // easing: Easing.cubic,  
            useNativeDriver: false
        }).start(() => {
            //Call after finish this animation !
            Animated.timing(this.state.xValue, {
                toValue: 0,
                duration: 3000,
                easing: Easing.linear,
                // easing: Easing.back(),     
                // delay: 2000,//run after 2 seconds
                useNativeDriver: false
            }).start(() => {
                if (this.state.stopAnimation == false) {
                    this.animer();
                }

            });
        });
    }

    stopAnimer = () => {
        this.state.stopAnimation = true
    }


    render() {
        return (
            <SafeAreaView style={emdrStyle.contenaire}>
                <Animated.View style={[emdrStyle.point, { left: this.state.xValue }]}>
                </Animated.View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={emdrStyle.bouton} onPress={this.animer}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Commencer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={emdrStyle.bouton} onPress={this.stopAnimer}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Arrêter</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'black' }}>
                        Sans bouger votre tête, suivre les mouvement de la boule.{"\n"}
                        Pensez en même temps à la situation qui génère des émotions douloureuses.{"\n"}
                        Après cette Séance ces émotions difficiles seront fortement atténuées.{"\n"} {"\n"}
                        N'hésitez-pas à répéter cet exercice pour conforeter le résultat.
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}

