import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from "react-native-modal";

const constants = require('../styles/styleConstants');


export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
        tabBarIcon: <Icon name='build' color={constants.COLORS.ICONCOLOR} />,
        tabBarColor: constants.COLORS.SETTINGS_SCREEN
    };

    state = {
        visibleModal: null,
    };

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text>Hello!</Text>
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>User Stuff</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Episode Stuff</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>???</Text>
                </TouchableOpacity>
                {this._renderButton('Default modal', () => this.setState({ visibleModal: 1 }))}
                {this._renderButton('Sliding from the sides', () => this.setState({ visibleModal: 2 }))}
                {this._renderButton('A slower modal', () => this.setState({ visibleModal: 3 }))}
                {this._renderButton('Fancy modal!', () => this.setState({ visibleModal: 4 }))}
                {this._renderButton('Bottom half modal', () => this.setState({ visibleModal: 5 }))}
                <Modal isVisible={this.state.visibleModal === 1}>
                    {this._renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 2}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutRight'}
                >
                    {this._renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 3}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                >
                    {this._renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 4}
                    backdropColor={'red'}
                    backdropOpacity={1}
                    animationIn={'zoomInDown'}
                    animationOut={'zoomOutUp'}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                >
                    {this._renderModalContent()}
                </Modal>
                <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    {this._renderModalContent()}
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: constants.COLORS.SETTINGS_SCREEN,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});