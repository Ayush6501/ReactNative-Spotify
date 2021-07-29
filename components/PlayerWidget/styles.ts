import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 49,
        backgroundColor: "#131313",
        flexDirection: "row",
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: "center",

    },
    rightContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1,
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: 100,
        justifyContent: "space-around",
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
    artist : {
        color: 'lightgray',
        fontSize: 18,
    },
    image: {
        width: 65,
        height: 65,
        marginRight: 5
    },
    dot: {
        marginRight: 0,
        marginLeft: 0
    }
});

export default styles;
