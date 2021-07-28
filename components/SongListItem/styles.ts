import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 7,
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
        fontSize: 20,
    },
    artist : {
        color: 'lightgray',
        fontSize: 18,
    },
    image: {
        width: 65,
        height: 65,
    }
});

export default styles;
