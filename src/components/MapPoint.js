import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const constants = require('../styles/styleConstants');


export default class MapPoint extends React.Component {
    static defaultProps = {};

    render() {
    const { active, xpos, ypos, navigation, title } = this.props;
        return (
            <View style={{position: 'absolute', left: xpos, top: ypos}}>
                <Icon
                    name='place'
                    color={active ? constants.COLORS.ACTIVE_MAPPOINT : constants.COLORS.INACTIVE_MAPPOINT}
                    onPress={() => navigation.navigate('Episodes', {
                        title
                    })}
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
