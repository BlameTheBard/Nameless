import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const constants = require('../styles/styleConstants');

export default class StoryScreen extends React.Component {
    static navigationOptions = {
        title: 'Achievements',
        tabBarIcon: <Icon name='grade' />,
        tabBarColor: constants.COLORS.ACHIEVEMENTS_SCREEN
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Achievements</Text>
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
