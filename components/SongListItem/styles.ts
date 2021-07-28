import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
    },
    rightContainer: {
        justifyContent: "space-around",
        marginLeft: 15,
    },
    rightBlock: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        width: "82%"
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    artist : {
        color: 'lightgray',
        fontSize: 22,
    },
    image: {
        width: 75,
        height: 75,
    }
});

export default styles;
