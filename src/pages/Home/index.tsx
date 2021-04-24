import React from 'react';
import { SafeAreaView, Text, StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Gamestore</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS === "android" ? 25 : 0,
    }
})