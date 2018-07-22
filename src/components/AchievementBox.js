import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
const constants = require('../styles/styleConstants');
import { sharedStyles } from '../styles/jointStyles';
import Modal from "react-native-modal";



export default class AchievementBox extends React.Component {
    static defaultProps = { imageUrl: require('../mediaAssets/fairyStock.png') };

    state = {
        visibleModal: null,
    };

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={sharedStyles.mainButton}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = (img, title, description) => (
        <View style={styles.modalContent}>
            <Image style={styles.achImage} source={ img }/>
            <Text>{title}</Text>
            <Text>{description}</Text>
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
        </View>
    );

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const { imageUrl } = this.props;

        return (
            <View style={styles.achBoxContainer}>
                <TouchableOpacity onPress={() => this.setState({ visibleModal: 1 })}>
                    <Image style={styles.achImage} source={ imageUrl }/>
                    <Modal
                        isVisible={this.state.visibleModal === 1}
                        animationIn={'zoomInDown'}
                        animationOut={'zoomOutUp'}
                        animationInTiming={500}
                        animationOutTiming={500}
                        backdropTransitionInTiming={500}
                        backdropTransitionOutTiming={500}
                    >
                        {this._renderModalContent(imageUrl, 'Some Ach', 'who knows. you did a thing.')}
                    </Modal>
                </TouchableOpacity>
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
