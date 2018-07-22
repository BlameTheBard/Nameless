import { StyleSheet } from 'react-native';
const constants = require('./styleConstants');


export const sharedStyles = StyleSheet.create({
    summaryText: {
        color: constants.COLORS.PRIMARYLIGHT,
        marginLeft: 10,
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    mainButton: {
        backgroundColor: constants.COLORS.EPISODES_SCREEN,
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }
});
