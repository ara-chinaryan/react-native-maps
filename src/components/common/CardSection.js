import React, {useState, useContext} from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
});

export {CardSection};
