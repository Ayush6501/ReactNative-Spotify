import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";

const AlbumScreen = () => {
    const route = useRoute();

    useEffect(() => {

    }, []);

    return (
        <View>
            <Text style={{ color: 'white'}}>
                Album Screen
            </Text>
            <SongListItem song={albumDetails.songs[0]} />
        </View>
    );
};

export default AlbumScreen;
