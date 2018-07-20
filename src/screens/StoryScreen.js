import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const constants = require('../styles/styleConstants');

export default class StoryScreen extends React.Component {
    static navigationOptions = {
        title: 'Story',
        tabBarIcon: ({focused, tintcolor}) => {
            return <Icon color={tintcolor} name='landscape'/>
        },
        tabBarColor: constants.COLORS.STORY_SCREEN,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.STORY_SCREEN,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
