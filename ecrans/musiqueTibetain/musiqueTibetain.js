import React from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import Tebetain from '../../components/tibetain'
import styles from './musiqueTibetainStyle'
const MusiqueTibetain = () => {

    const sounds = [{path:'campana_tibetana_patrizio_yoga_olistik_sound_project_13758.mp3',name:'campana tibetana patrizio yoga olistik'},{path:'galactic_glide_space_cinematic_ambient_164329.mp3',name:'galactic glide space cinematic ambient'},{path:'mandala_patrizio_yoga_olistik_sound_project_15382.mp3',name:'mandala patrizio yoga olistik'},{path:'relaxing_meditation_tibetan_path_112167.mp3',name:'relaxing meditation tibetan'},{path:'tibet_96242.mp3',name:'tibet'},{path:'tibet_bolws_1_olistik_sound_project_patrizio_yoga_179523.mp3',name:'tibet bolws 1 olistik sound project patrizio yoga'},{path:'tibet_bowls_1_olistik_sound_project_161659.mp3',name:'tibet bowls 1 olistik'},{path:'tibet_bowls_2_olistik_sound_project_patrizio_yoga_161662.mp3',name:'tibet bowls 2 olistik sound project patrizio yoga'},{path:'tibetan_bowls_meditation_olistik_sound_project_patrizio_yoga_12046.mp3',name:'tibetan bowls meditation olistik sound project patrizio yoga'},{path:'tranquil_deep_tibetan_meditation_110618.mp3',name:'tranquil deep tibetan meditation'}];


    return (
        <View>
            <ScrollView>
                {sounds.map((item,index) =>
                <View style={styles.card} >
                <Tebetain key={index} path={item.path} name={item.name}/>
                </View>)}
            </ScrollView>
        </View>
    )

}

export default MusiqueTibetain