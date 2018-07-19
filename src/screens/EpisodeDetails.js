import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const constants = require('../styles/styleConstants');

export default class EpisodeDetails extends React.Component {
    static navigationOptions = {
        title: 'Episodes',
        tabBarIcon: <Icon name="playlist-play" />,
        tabBarColor: constants.COLORS.EPISODES_SCREEN

    };

    render() {
        return (
            <View style={styles.container}>
                <Text>EPISODE DETAILS</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.EPISODES_SCREEN,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
