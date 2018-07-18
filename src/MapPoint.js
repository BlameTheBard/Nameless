import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class MapPoint extends React.Component {
    static defaultProps = {};

    render() {
        return (
            <View style={{position: 'absolute', left: this.props.xpos, top: this.props.ypos}}>
                <Icon
                    name='place'
                    color='#AD2400'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapPointPosition: {
        position: 'absolute',
        top: 100,
        left: 100
    }
});
