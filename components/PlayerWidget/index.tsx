import { Text, View, Image } from 'react-native'
import styles from './styles'
import {Song} from "../../types";
import React from "react";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri}} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Entypo style={styles.dot} name="dot-single" size={24} color="white" />
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="hearto" size={30} color={"white"} />
                    <FontAwesome name='play' size={30} color={"white"}/>
                </View>
            </View>
        </View>
    );
};

export default PlayerWidget;
