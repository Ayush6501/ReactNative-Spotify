// noinspection BadExpressionStatementJS

import React from 'react';
import styles from './styles';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import {Album} from "../../types";
import {useNavigation} from "@react-navigation/native";

export type AlbumProps = {
    album: Album
}

const AlbumComponent = (props: AlbumProps) => {
    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }

    return (
        <TouchableOpacity onPress={pressHandler}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AlbumComponent;
