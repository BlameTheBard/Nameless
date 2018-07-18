import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MapPoint from './MapPoint';
//TODO: Orientation of the screen...Changes images and stuff.
//ToDo: break out Path to its own thing, but testing here.

const TEST_DATA = {
    'episode_one': {
        active: false,
        title: "Episode 1",
        xpos: 100,
        ypos: 100
    },
    'episode_two': {
        active: false,
        title: "Episode 2",
        xpos: 200,
        ypos: 200
    },
    'episode_three': {
        active: true,
        title: "Episode 3",
        xpos: 250,
        ypos: 190
    }
};

export default class HomeScreen extends React.Component {
    static defaultProps = {};

    static navigationOptions = {
        title: 'Map',
    };

    render() {
       const { navigation } = this.props;
       const episodeLayout = [];


        for (const key in TEST_DATA) {
            // skip loop if the property is from prototype
            if (!TEST_DATA.hasOwnProperty(key)) continue;

            const obj = TEST_DATA[key];

            const mapPoint = <MapPoint active={obj.active} key={key} navigation={navigation} xpos={obj.xpos} ypos={obj.ypos}/>

            episodeLayout.push(mapPoint);
        }


        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <Image style={styles.fullMap} source={ require('./mediaAssets/AQ-EPS-01-0001.png') } />
                    <Text>MAP</Text>
                    <View style={styles.pathSegment1} />
                    <View style={styles.pathSegment2} />
                    <View style={styles.pathSegment3} />
                    {episodeLayout}
                </View>
                <View style={styles.summaryContainer}>
                    <Text>Open up App.js to start working on your app!</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('Details')}
                    />
                </View>
                <Button
                    style={styles.menuButton}
                    title="Menu"
                    onPress={() => navigation.openDrawer()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullMap:{
        position: 'absolute',
        width: '100%',
        height: '100%'
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
        flex: 3,
        width:'100%'
    },
    summaryContainer: {
        backgroundColor: '#c4fff7',
        flex: 1
    },
    menuButton: {
        backgroundColor: '#cadd85',
    }
});
