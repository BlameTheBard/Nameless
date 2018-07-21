import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import AchievementBox from '../components/AchievementBox'
const constants = require('../styles/styleConstants');
import { sharedStyles } from '../styles/jointStyles';


export default class StoryScreen extends Component {
    static navigationOptions = {
        title: 'Achievements',
        tabBarIcon: <Icon name='grade' color={constants.COLORS.ICONCOLOR}/>,
        tabBarColor: constants.COLORS.ACHIEVEMENTS_SCREEN
    };

    render() {
        //todo test data for achievements...and render those in an array.
        //todo: popout modal for each (see settings)
        //todo: figure out what info i need for data? And what needs to be displayed.
        return (
            <View style={styles.container}>
                <View style={styles.userStatContainer}>
                    <Text style={sharedStyles.titleText}>User Stats</Text>
                    <Text> Play Time</Text>
                    <Text>Approx Distance</Text>
                    <Text>SideQuests Finished</Text>
                    <Text>Quests Finished</Text>
                </View>
                <View style={styles.achContainer}>
                    <Text style={sharedStyles.titleText}>Achievements</Text>
                    <ScrollView>
                    <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                        <AchievementBox/>
                    </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: constants.COLORS.ACHIEVEMENTS_SCREEN,
        flex: 1,
        paddingTop: 30,
    },
    userStatContainer: {
        backgroundColor: constants.COLORS.EPISODES_SCREEN,
        flex: 2,
    },
    achContainer: {
        backgroundColor: constants.COLORS.ACHIEVEMENTS_SCREEN,
        flex: 4,
    }
});
