import React from 'react'
import { SafeAreaView,Text,FlatList,View } from 'react-native'
import ConseilCard from '../../components/conseilCard'
import { listeConseils } from './listeConseils'
import styleConseil from './conseilStyle'

const Conseils = () => {
    return (
        <SafeAreaView>
            <Text style={styleConseil.titre}>10 façons d'arrêter une crise de panique</Text>
            <View style={styleConseil.container}>
            <FlatList
                data={listeConseils}
                renderItem={({item})=>{
                    
                     return (<ConseilCard id={item.id} text={item.text} subText={item.subText}/>)
             }}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator
            />
            </View>
        </SafeAreaView>
    )
}

export default Conseils