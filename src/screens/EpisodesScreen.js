import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import EpisodeDetails from '../components/EpisodeDetails';
const constants = require('../styles/styleConstants');

export default class EpisodesScreen extends React.Component {
    static navigationOptions = {
        title: 'Episodes',
        tabBarIcon: <Icon name="playlist-play" />,
        tabBarColor: constants.COLORS.EPISODES_SCREEN

    };

    render() {
        const { navigation } = this.props;
        // BLARG::: console.log(navigation);
        const episodeTitle = navigation.getParam('title', '');

        if( episodeTitle ) {
            return (<EpisodeDetails navigation={navigation} title={episodeTitle}/>)
        }
        //return single episode
        //return full episodes
        //button to change view screen.
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
