import React, { Component } from 'react';
import { View, TouchableOpacity, Animated, Text,Dimensions ,Easing} from 'react-native';
import emdrStyle from './emdrStyle';

var { width} = Dimensions.get('window');
export default class EMDR extends Component {
    
    state = {
        xValue: new Animated.Value(0),
    }
      animer = () => {
        Animated.timing(this.state.xValue, {
          toValue: width - 100,
          duration: 1000,
          easing: Easing.linear,      
          // easing: Easing.back(),     
          // easing: Easing.cubic,  
          useNativeDriver:false    
        }).start(() => {
          //Call after finish this animation !
          Animated.timing(this.state.xValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            // easing: Easing.back(),     
            // delay: 1000,//run after 1 seconds
            useNativeDriver:false
          }).start(() => {
            t= setInterval(()=>this.animer(),20000)
            clearInterval(t)
            
          });
        });
      }
    render() {

        const trans = {

            transform: [
                { translateY: this.state.position }
            ]
        }
        

        return (
            <>
                <Animated.View  style={[emdrStyle.point,{ left: this.state.xValue } ]}>

                </Animated.View>
                <View >

                    <TouchableOpacity onPress={this.animer}>
                        <Text>Commencer</Text>
                    </TouchableOpacity>

                </View>
            </>
        );
    }
}

