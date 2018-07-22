import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Button, Image } from 'react-native';
import MapPoint from '../components/MapPoint';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import { sharedStyles } from '../styles/jointStyles';
import { TEST_DATA, ANNOUNCEMENTS } from '../constants';


const constants = require('../styles/styleConstants');

//TODO: Orientation of the screen...Changes images and stuff.
//ToDo: break out Path to its own thing, but testing here.
//todo compile data (for annoucnments and episodes)

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

    _renderItem ({item, index}) {
        //todo: provide a generic image if one is missing.
        const { activeEpisode, imageUrl, title, description } = item;

        const carouselItem = (
            <View style={styles.slide}>
                <Image style={styles.carouselImg} source={ imageUrl }/>
                <View>
                    <Text style={styles.carouselTitle}>{ title }</Text>
                    <Text style={styles.carouselText}>{ description }</Text>
                </View>
            </View> );
        if( activeEpisode ){
            return (
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Episodes', { title })}>
                    {carouselItem}
                </TouchableHighlight>
            )
        }

        return ( carouselItem );
    }

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
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={ANNOUNCEMENTS}
                        loop={true}
                        renderItem={this._renderItem.bind(this)}
                        sliderWidth={500}
                        itemWidth={500}
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
        height: '105%',
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
        shadowOffset: {width: 0, height: -5},
        padding: 10,
        width: '110%'
    },
    carouselImg: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
    },
    carouselTitle: {
        fontWeight:'bold',
        fontSize: 18,
        color: '#FFF',
        paddingLeft: 20,
    },
    carouselText: {
        color: '#FFF',
        paddingLeft: 20,
        width: 250,
        height: 100,
    },
    slide: {
        flexDirection: 'row',
    }
});
