import { Text, View, Image } from 'react-native'
import styles from './styles'
import {Song} from "../../types";
import React from "react";
import { Feather } from '@expo/vector-icons'

export type SongListItems = {
    song: Song
}


const SongListItem = (props: SongListItems) => {
    const {song} = props

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri}} style={styles.image} />
            <View style={styles.rightBlock}>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <Feather name="more-vertical" size={30} color="white" />
            </View>
        </View>
    );
};

export default SongListItem;
