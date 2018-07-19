import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import EpisodeDetails from './screens/EpisodeDetails';

export default PrimaryNav = createDrawerNavigator({
    Map: {
        screen: HomeScreen,
    },
    Details: {
        screen: EpisodeDetails,
    },
});


export default createMaterialBottomTabNavigator({
    Album: { screen: HomeScreen },
    Library: { screen: EpisodeDetails },
}, {
    initialRouteName: 'HomeScreen',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});
