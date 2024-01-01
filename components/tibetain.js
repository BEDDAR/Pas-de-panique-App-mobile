import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions, Alert } from 'react-native'
import Sound from 'react-native-sound'
import styles from '../ecrans/musiqueTibetain/musiqueTibetainStyle'
import Slider from '@react-native-community/slider'

const Tibetain = ({ path }) => {
    const { width } = useWindowDimensions()
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [sound, setSound] = useState(null);
    const [Play, setPlay] = useState(false);
    useEffect(() => {
        // Initialize the sound
        const mySound = new Sound(path, null, (error) => {
            if (error) {
                Alert.alert("Erreur lors de chargement de l'audio")
            } else {
                setSound(mySound);

                // Update the duration when the sound is loaded
                const dur = mySound.getDuration();
                setDuration(dur);
                // Update the current time every second while playing
                const interval = setInterval(() => {
                    if (mySound.isPlaying()) {
                        mySound.getCurrentTime((seconds) => {
                            setCurrentTime(seconds.toFixed(2)); // Update current time
                        });
                    }
                }, 1000);

                // Clean up the interval when the component is unmounted or sound is released
                return () => {
                    clearInterval(interval);
                };
            }
        });

        // Clean up the sound when the component is unmounted
        return () => {
            if (sound) {
                sound.release();
            }
        };
    }, []);

    const playSound = () => {
        if (sound && isPlaying) {
            sound.play();
        }
    };

    const pauseSound = () => {
        if (sound && !Play) {
            sound.play()
        } else if (Play) {
            sound.pause()
            
        }
        setPlay(!Play)
    }

    const onSliderValueChange = (value) => {
        if (sound) {
            sound.setCurrentTime(value);
            setCurrentTime(value.toFixed(2));
        }
    };
    return (
        <View>

            <Slider
                style={{ width: width - 30, height: 40 }}
                onTouchMove={() => console.log('onTouchMove')}
                minimumValue={0}
                maximumValue={duration}
                value={parseFloat(currentTime)}
                onValueChange={onSliderValueChange}
                thumbTintColor="#E649AA"
                minimumTrackTintColor="#E649AA"
                maximumTrackTintColor="#000000" />

            <Text>Total Duration: {duration} seconds</Text>
            <Text>Current Time: {currentTime} seconds</Text>
            
            {Play ? <TouchableOpacity style={styles.bouton} onPress={pauseSound} >
                    <Text>start</Text>
                </TouchableOpacity>:
                <TouchableOpacity style={styles.bouton} onPress={pauseSound} >
                    <Text>Pause</Text>
                </TouchableOpacity>
            }

        </View>
    )

}

export default Tibetain