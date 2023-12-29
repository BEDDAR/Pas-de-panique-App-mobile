import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import puzzleStyle from './puzzleStyle'
import PuzzlePiece from '../../components/puzzlePiece'


const Puzzle = () => {

    const [positionsPieces, setPositionsPieces] = useState([1, 2, 3, 4, 5, 6, 7,8, 9,10, 11, 12, 13, 14, 15, null]);
    const [ismutted,setIsMutted] = useState(false)
     /* it will be called when queues did update */
    
    const [count, setCount] = useState(0)
    const mutationPosition=(piece,index)=>{
        let temp =positionsPieces
        indexNull=temp.indexOf(null)
        if(index==0){
            if(indexNull==1 || indexNull==4){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==12){
            if(indexNull==8 || indexNull==13){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==3){
            if(indexNull==2 || indexNull==7){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==15){
            if(indexNull==14 || indexNull==11){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==1||index==2){
            if(indexNull==index -1 || indexNull==index +1 || indexNull==index +4){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==4||index==8){
            if(indexNull==index-4 || indexNull==index+1 || indexNull==index+4){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==7||index==11){
            if(indexNull==index-4 || indexNull==index-1||indexNull==index+4){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==13||index==14){
            if(indexNull==index-1 || indexNull==index-4||indexNull==index+1){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        else if(index==5||index==6||index==9||index==10){
            if(indexNull==index +1 || indexNull==index+4||indexNull==index-1||indexNull==index-4){
                temp[indexNull]=piece
                temp[index]=null
                setPositionsPieces(positionsPieces,temp)
            }
        }
        setIsMutted(!ismutted)

    }
    return (
        <View style={puzzleStyle.contenair}>
            <View style={puzzleStyle.puzzlePlateau}>
                    {positionsPieces.map((piece,index)=> <PuzzlePiece key={index} name={piece} myFunction={()=>mutationPosition(piece,index)} />)}
            </View>
            <View style={puzzleStyle.displayBouton}>
                <TouchableOpacity style={puzzleStyle.bouton} on onPress={this.remplirTabPuzzle}><Text style={puzzleStyle.textBouton}>Commencer</Text></TouchableOpacity>
                <TouchableOpacity style={puzzleStyle.bouton} on onPress={this.remplirTabPuzzle}><Text style={puzzleStyle.textBouton}>Recommencer</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Puzzle