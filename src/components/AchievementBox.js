import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
const constants = require('../styles/styleConstants');


export default class AchievementBox extends React.Component {
    static defaultProps = { imageUrl: require('../mediaAssets/fairyStock.png') };

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const { imageUrl } = this.props;

        return (
            <View style={styles.achBoxContainer}>
                <TouchableHighlight onPress={() => alert('blarg')}>
                    <Image style={styles.achImage} source={ imageUrl }/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    achBoxContainer: {
        padding: 10,
    },
    achImage: {
        backgroundColor: 'green',
        borderColor: 'green',
        borderRadius: 10,
        borderWidth: 5,
        height:100,
        width: 100,
    }
});
