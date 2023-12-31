import React, { Component } from 'react';
import { View, Animated, Text, Linking,useWindowDimensions, Easing, SafeAreaView, TouchableOpacity } from 'react-native';
import emdrStyle from './emdrStyle';


const EMDR =()=> {
    var width= useWindowDimensions().width
    state = {
        xValue: new Animated.Value(0),
        stopAnimation: false
    }
        
    animer = () => {
        Animated.timing(this.state.xValue, {
            toValue: width - 80,
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
                this.state.stopAnimation = false
            });
        });
    }

    stopAnimer = () => {
        this.state.stopAnimation = true
    }


        return (
            <SafeAreaView style={emdrStyle.contenaire}>
                <Animated.View style={[emdrStyle.point, { left: this.state.xValue,marginTop:50 }]}>
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
    
                </View>
            </SafeAreaView>
        );
    }

export default EMDR