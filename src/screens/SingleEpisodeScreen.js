import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNav } from '../routes'
const constants = require('../styles/styleConstants');

export default class SingleEpisodeScreen extends React.Component {
    static navigationOptions = {
        title: 'Single Episode',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Single Episode Play!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.ACHIEVEMENTS_SCREEN,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
