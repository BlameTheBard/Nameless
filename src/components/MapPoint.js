import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class MapPoint extends React.Component {
    static defaultProps = {};

    render() {
    const { active, xpos, ypos, navigation } = this.props;
        return (
            <View style={{position: 'absolute', left: xpos, top: ypos}}>
                <Icon
                    name='place'
                    color={active ? '#AD2400' : '#b3b3b3'}
                    onPress={() => navigation.navigate('Episodes')}
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
