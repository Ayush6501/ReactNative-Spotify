import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 25,
    },
    image: {
      width: 175,
      height: 175,
      marginBottom: 10
    },
    name: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 5
    },
    by: {
        color: 'lightgray',
        margin: 5,
        fontSize: 15,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 15,
    },
    button: {
        backgroundColor: "#1cd05d",
        height: 60,
        width: 175,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },
    buttonText: {
        color: 'lightgray',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;
