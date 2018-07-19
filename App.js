import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from './src/screens/HomeScreen';
import EpisodeDetails from './src/screens/EpisodeDetails';
import StoryScreen from './src/screens/StoryScreen';
import Achievements from './src/screens/Achievements';
import SettingsScreen from './src/screens/SettingsScreen';

//TODO: Seperate Nav to a different component

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

const TabNav = createMaterialBottomTabNavigator({
    Map: { screen: HomeScreen },
    Details: { screen: EpisodeDetails },
    Story: { screen: StoryScreen},
    Achievements: { screen: Achievements },
    Settings: { screen: SettingsScreen}
}, {
    activeTintColor: '#0a0a0a',
    inactiveTintColor: '#3e2465',
    initialRouteName: 'Map',
    labeled: true,
    barStyle: { backgroundColor: '#694fad' },
});

export default class App extends React.Component {
    render() {
        return <TabNav/>;
    }
}
