import React from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { sharedStyles } from '../styles/jointStyles';

const constants = require('../styles/styleConstants');

// Pause, Rewind, Title
// Next Episode, Sidequest
export default class EpisodeDetails extends React.Component {
    static navigationOptions = {
        title: 'Single Episode',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={sharedStyles.titleText}>Title: {this.props.title}</Text>
                <Text>Elapsed Time:</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Icon color={constants.COLORS.ICONCOLOR} size='50' name="rotate-left" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon color={constants.COLORS.ICONCOLOR} size='50' name="play-arrow" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon color={constants.COLORS.ICONCOLOR} size='50' name="stop" />
                    </TouchableOpacity>
                </View>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Episodes', {
                    title: ''
                })}>
                    <View style={sharedStyles.mainButton}>
                        <Text>Episode List</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.HOME_SCREEN,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
