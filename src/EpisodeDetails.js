import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class EpisodeDetails extends React.Component {
    static navigationOptions = {
        title: 'Episode Details',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>EPISODE DETAILS</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4aff57',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
