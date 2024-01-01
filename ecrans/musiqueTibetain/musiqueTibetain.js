import React from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import Tebetain from '../../components/tibetain'

const MusiqueTibetain = () => {

    const sounds = ['campana_tibetana_patrizio_yoga_olistik_sound_project_13758.mp3','galactic_glide_space_cinematic_ambient_164329.mp3','mandala_patrizio_yoga_olistik_sound_project_15382.mp3','relaxing_meditation_tibetan_path_112167.mp3','tibet_96242.mp3','tibet_bolws_1_olistik_sound_project_patrizio_yoga_179523.mp3','tibet_bowls_1_olistik_sound_project_161659.mp3','tibet_bowls_2_olistik_sound_project_patrizio_yoga_161662.mp3','tibetan_bowls_meditation_olistik_sound_project_patrizio_yoga_12046.mp3','tranquil_deep_tibetan_meditation_110618.mp3'];


    return (
        <View>
            <ScrollView>
                {sounds.map((item,index) =>
                <Tebetain key={index} path={item}/>)}
            </ScrollView>
        </View>
    )

}

export default MusiqueTibetain