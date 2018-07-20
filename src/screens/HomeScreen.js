import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MapPoint from '../components/MapPoint';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
const constants = require('../styles/styleConstants');

//TODO: Orientation of the screen...Changes images and stuff.
//ToDo: break out Path to its own thing, but testing here.

export const TEST_DATA = {
    '1': {
        active: false,
        description: 'the small brown fox jumped over the lazy dog and this is a longer desc for a reason.',
        title: "Episode 1",
        xpos: 100,
        ypos: 100
    },
    '2': {
        active: false,
        description: 'the small brown fox jumped over the lazy dog and this is a longer desc for a reason.' +
        'I am also a long desc. Because I need to test that shit. Otherwise UX breaks and no one has a clue why,' +
        'so here we are with the longass desc.',
        title: "Episode 2",
        xpos: 200,
        ypos: 200
    },
    '3': {
        active: false,
        description: 'WHATEVER',
        title: "Episode 3",
        xpos: 250,
        ypos: 190
    },
    '4': {
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 4",
        xpos: 240,
        ypos: 160
    },
    '5': {
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 5",
        xpos: 250,
        ypos: 200
    },
    '6': {
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 6",
        xpos: 350,
        ypos: 300
    },
    '7': {
        active: true,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 7",
        xpos: 250,
        ypos: 300
    }
};

export default class HomeScreen extends React.Component {
    static defaultProps = {};

    static navigationOptions = {
        title: 'Map',
        tabBarIcon: <Icon name='explore'/>,
        tabBarColor: constants.COLORS.HOME_SCREEN
    };

    render() {
       const { navigation } = this.props;
       const episodeLayout = [];

       for (const key in TEST_DATA) {
            // skip loop if the property is from prototype
            if (!TEST_DATA.hasOwnProperty(key)) continue;
            const obj = TEST_DATA[key];
            const mapPoint =
                <MapPoint
                    active={obj.active}
                    key={key}
                    navigation={navigation}
                    title={obj.title}
                    xpos={obj.xpos}
                    ypos={obj.ypos}
                />

            episodeLayout.push(mapPoint);
        }


        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <Image style={styles.fullMap} source={ require('../mediaAssets/AQ-EPS-01-0001.png') } />
                    <View style={styles.pathSegment1} />
                    <View style={styles.pathSegment2} />
                    <View style={styles.pathSegment3} />
                    {episodeLayout}
                </View>
                <View style={styles.summaryContainer}>
                    <Text >Open up App.js to start working on your app!</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('Episodes')}
                    />
                </View>
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
    fullMap:{
        position: 'absolute',
        width: '100%',
        height: '110%'
    },
    pathSegment1:{
        borderRadius: 2,
        position: 'absolute',
        backgroundColor:'#b3b3b3',
        top: 125,
        transform: [{ rotate: '20deg'}],
        left: 100,
        height: 20,
        width: 10
    },
    pathSegment2:{
        borderRadius: 2,
        position: 'absolute',
        backgroundColor:'#b3b3b3',
        top: 155,
        left: 95,
        height: 20,
        width: 10
    },
    pathSegment3:{
        borderRadius: 2,
        position: 'absolute',
        backgroundColor:'#AD2400',
        top: 185,
        left: 100,
        height: 20,
        transform: [{ rotate: '145deg'}],
        width: 10
    },
    mapContainer: {
        backgroundColor: '#fff0a1',
        flex: 5,
        width:'100%'
    },
    summaryContainer: {
        backgroundColor: '#052E05',
        flex: 1
    },
    menuButton: {
        backgroundColor: '#cadd85',
    }
});
