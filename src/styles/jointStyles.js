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
    }
});
