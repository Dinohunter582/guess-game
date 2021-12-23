import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/Colors"

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Finished</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/nzoth.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.textResultsContainer}>
                <BodyText style={styles.resultText}>The phone took <Text style={styles.highlight}>{props.roundsNumber}
                </Text> rounds to guess the number: <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>

            <MainButton onPress={props.onRestart}>Restart</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    textResultsContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    },
});


export default GameOverScreen;