import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import EpisodeDetails from '../components/EpisodeDetails';
import EpisodeTile from '../components/EpisodeTile';
const constants = require('../styles/styleConstants');
import { TEST_DATA } from '../constants'

export default class EpisodesScreen extends React.Component {
    static navigationOptions = {
        title: 'Episodes',
        tabBarIcon: <Icon name="playlist-play" color={constants.COLORS.ICONCOLOR}/>,
        tabBarColor: constants.COLORS.EPISODES_SCREEN

    };

    render() {
        const { navigation } = this.props;
        // BLARG::: console.log(navigation);
        const episodeTitle = navigation.getParam('title', '');
        console.log('blarg testdata:', TEST_DATA);

        if( episodeTitle ) {
            return (<EpisodeDetails navigation={navigation} title={episodeTitle}/>)
        }

        const episodeList = [];

        for (const key in TEST_DATA) {
            // skip loop if the property is from prototype
            if (!TEST_DATA.hasOwnProperty(key)) continue;
            const obj = TEST_DATA[key];
            const episodeTile =
                <EpisodeTile
                    active={obj.active}
                    description={obj.description}
                    key={key}
                    navigation={navigation}
                    title={obj.title}
                />

            episodeList.push(episodeTile);
        }

        //return single episode
        //return full episodes
        //button to change view screen.
        return (
            <View style={styles.container}>
                <Text style={styles.title}>EPISODE DETAILS</Text>
                <ScrollView
                    contentContainerStyle={{
                         alignItems: 'stretch',
                    }}
                >
                    {episodeList}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: constants.COLORS.EPISODES_SCREEN,
        flexGrow: 1,
        // height: '100%',
        // width: '100%',
    },
    title: {
        backgroundColor: constants.COLORS.ACCENT,
        color: constants.COLORS.DARKTITLE,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    }
});
