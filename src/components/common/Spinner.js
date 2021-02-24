import React, {useState, useContext} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size}/>
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export {Spinner};
