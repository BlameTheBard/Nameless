import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import EpisodeDetails from './EpisodeDetails';

export default PrimaryNav = createDrawerNavigator({
    Map: {
        screen: HomeScreen,
    },
    Details: {
        screen: EpisodeDetails,
    },
});
