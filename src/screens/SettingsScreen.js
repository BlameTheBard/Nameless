import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const constants = require('../styles/styleConstants');


export default class StoryScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
        tabBarIcon: <Icon name='build' color={constants.COLORS.ICONCOLOR} />,
        tabBarColor: constants.COLORS.SETTINGS_SCREEN
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.SETTINGS_SCREEN,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
