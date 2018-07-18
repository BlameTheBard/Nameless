import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './src/HomeScreen';
import EpisodeDetails from './src/EpisodeDetails';


const RootStack = createStackNavigator(
    {
        Map: HomeScreen,
        Details: EpisodeDetails,
        // Settings: UserSettings,
        // 'User Stats': UserStats,
        // Achievements: Achievements,
        // 'Story Thus Far': StoryThusFar,


    },
    {
        initialRouteName: 'Map',
    }
);

const PrimaryNav = createDrawerNavigator({
    Map: {
        screen: HomeScreen,
    },
    Details: {
        screen: EpisodeDetails,
    }
});

export default class App extends React.Component {
    render() {
        return <PrimaryNav/>;
    }
}
