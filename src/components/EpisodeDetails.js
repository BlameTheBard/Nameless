import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
const constants = require('../styles/styleConstants');

export default class EpisodeDetails extends React.Component {
    static navigationOptions = {
        title: 'Single Episode',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Single Episode Play! {this.props.title}</Text>
                <Button
                    title="Go to Episode List"
                    onPress={() => this.props.navigation.navigate('Episodes', {
                        title: ''
                    })}
                />
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
