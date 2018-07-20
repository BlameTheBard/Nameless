import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Image } from 'react-native';
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
        xpos: 50,
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
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 7",
        xpos: 250,
        ypos: 300
    },
    '8': {
        active: true,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 8",
        xpos: 150,
        ypos: 300
    }
};

export default class HomeScreen extends React.Component {
    static defaultProps = {};

    static navigationOptions = {
        title: 'Map',
        tabBarIcon: <Icon name='explore' color={constants.COLORS.ICONCOLOR}/>,
        tabBarColor: constants.COLORS.HOME_SCREEN,
        navigationOptions: {
            header: {
                visible: false
            }
        }
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
                <Image style={styles.titleImage} source={ require('../mediaAssets/fantasy_script__arroch__by_grahamward-d5t5n4q.png')} />
                {/*<Text style={styles.title}>[NAMELESS]</Text>*/}
                <View style={styles.mapContainer}>
                    <Image style={styles.fullMap} source={ require('../mediaAssets/testAntartic.png') } />
                    <View style={styles.pathSegment1} />
                    <View style={styles.pathSegment2} />
                    <View style={styles.pathSegment3} />
                    {episodeLayout}
                </View>
                <View style={styles.summaryContainer}>
                    <ScrollView horizontal={true} style={styles.summaryContainer}>
                        <Text style={styles.summaryText}>Latest Episode</Text>
                        <Text style={styles.summaryText}>Announcment 1</Text>
                        <Text style={styles.summaryText}>Announcment 2</Text>
                        <Text style={styles.summaryText}>Announcment 3</Text>
                        <Text style={styles.summaryText}>Announcment 4</Text>
                    </ScrollView>
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
        paddingTop: 40,
    },
    title: {
        position: 'absolute',
        padding: 5,
        fontSize: 30,
        fontWeight: 'bold',
        zIndex:1,
        top: 0
    },
    titleImage: {
        position: 'absolute',
        zIndex:1,
        top: 40,
        width: 200,
        height: 100,
        aspectRatio: 1
    },
    fullMap:{
        position: 'absolute',
        width: '100%',
        height: '110%',
        top: -20
    },
    pathSegment1:{
        borderRadius: 2,
        position: 'absolute',
        backgroundColor:constants.COLORS.INACTIVE_MAPPOINT,
        top: 125,
        transform: [{ rotate: '20deg'}],
        left: 100,
        height: 20,
        width: 10
    },
    pathSegment2:{
        borderRadius: 2,
        position: 'absolute',
        backgroundColor: constants.COLORS.INACTIVE_MAPPOINT,
        top: 155,
        left: 95,
        height: 20,
        width: 10
    },
    pathSegment3:{
        borderRadius: 2,
        position: 'absolute',
        backgroundColor: constants.COLORS.INACTIVE_MAPPOINT,
        top: 185,
        left: 100,
        height: 20,
        transform: [{ rotate: '145deg'}],
        width: 10
    },
    mapContainer: {
        flex: 5,
        width:'100%'
    },
    summaryContainer: {
        backgroundColor: constants.COLORS.HOME_SCREEN,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {width: 2, height: -5},
        padding: 10,
        width: '100%'
    },
    summaryText: {
        color: constants.COLORS.PRIMARYLIGHT,
        marginLeft: 10,
    }
});
