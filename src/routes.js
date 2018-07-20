import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from '../src/screens/HomeScreen';
import EpisodesScreen from '../src/screens/EpisodesScreen';
import StoryScreen from '../src/screens/StoryScreen';
import Achievements from '../src/screens/Achievements';
import SettingsScreen from '../src/screens/SettingsScreen';
// import SingleEpisode from '../src/screens/SingleEpisodeScreen';

export const TabNav = createMaterialBottomTabNavigator({
    Map: { screen: HomeScreen },
    Episodes: { screen: EpisodesScreen,
        navigationOptions: ({ state }) => ({
            params: '',
        })},
    Story: { screen: StoryScreen},
    Achievements: { screen: Achievements },
    Settings: { screen: SettingsScreen},
}, {
    activeTintColor: '#0a0a0a',
    inactiveTintColor: '#3e2465',
    initialRouteName: 'Map',
    labeled: true,
    barStyle: { backgroundColor: '#694fad' },
});

// export const extraNav = createStackNavigator(
//     {
//         SinglePage: SingleEpisode,
//         Tabs: TabNav
//     },
// );

export const RootStackNav = createStackNavigator(
    {
        Tabs: {
            screen: TabNav
        },
        // SinglePage: {
        //     screen: extraNav,
        // }
    },
);