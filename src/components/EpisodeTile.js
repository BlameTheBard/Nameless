import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const constants = require('../styles/styleConstants');

export default class EpisodeTile extends React.Component {
    render() {
        const { active, description, navigation, title} = this.props;

        //return single episode
        //return full episodes
        //button to change view screen.
        return (
            <View style={styles.container}>
                <Text
                    onPress={() => navigation.navigate('Episodes', {title})}
                    style={styles.titleLink}
                >
                    {title}
                </Text>
                <View style={styles.episodeBody}>
                    <Image
                        source={{
                            uri: 'http://icons.iconarchive.com/icons/designbolts/free-male-avatars/128/Male-Avatar-icon.png',
                        }}
                        style={{width: 32, height:32}}
                    />
                    <Text style={{color: '#fff', paddingLeft: 20, paddingRight: 20, flexShrink: 1}} numberOfLines={3}>{description}</Text>
                    <Icon styles={styles.episodeIcon} name="play-arrow" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    //     alignItems: 'center',
        borderColor: constants.COLORS.ACCENT,
        backgroundColor: constants.COLORS.PRIMARYBG,
        borderRadius: 3,
        padding: 10,
        marginTop: 5,
    },
    episodeBody:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    episodeIcon: {
        width: 30,
    },
    titleLink: {
        alignSelf: 'center',
        color: constants.COLORS.DARKTITLE,
        fontSize: 20,
        fontWeight: 'bold'
    },
});
