import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, Image, TextInput, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.greetings}>
                    <Text style={styles.title}>Hello, Rodrigo.</Text>
                    <View style={styles.gems}>
                        <Text style={styles.gemText}>You have</Text>
                        <Text style={styles.gemQuantity}>999</Text>
                        <Image source={require('../../assets/gem.png')} style={styles.gem} />
                        <Text style={styles.gemText}>gems</Text>
                    </View>
                </View>
                <Image source={{ uri: "https://wallpapercave.com/wp/wp7513825.jpg" }} style={styles.profileImage} />
            </View>
            <View style={styles.searchContainer}>
                <Feather name="search" size={24} color={colors.main} />
                <TextInput style={styles.searchInput} placeholder="Search game" placeholderTextColor={colors.gray} />
            </View>
            <View style={styles.gendersContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.genderBox}>
                    <Image style={styles.genderImage} source={require('../../assets/sword.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.genderBox}>
                    <Image style={styles.genderImage} source={require('../../assets/chess-piece.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.genderBox}>
                    <Image style={styles.genderImage} source={require('../../assets/security.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.genderBox}>
                    <Image style={styles.genderImage} source={require('../../assets/vs.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.genderBox}>
                    <Image style={styles.genderImage} source={require('../../assets/targeting.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS === "android" ? 30 : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 21,
    },
    greetings: {

    },
    title: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.heading,
        marginBottom: 2
    },
    subtitle: {
        color: colors.gray,
        fontSize: 12,
        fontFamily: fonts.text
    },
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.main,
    },
    searchContainer: {
        backgroundColor: colors.dark_gray,
        height: 40,
        marginHorizontal: 21,
        borderRadius: 20,
        marginTop: 30,

        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1,
        height: '100%',
        color: colors.white,
        fontFamily: fonts.text
    },
    gendersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 21,
        marginTop: 30,
    },
    genderBox: {
        width: 53,
        height: 53,
        backgroundColor: colors.main,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    genderImage: {
        width: 32,
        height: 32,
    },
    gems: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    gem: {
        width: 16,
        height: 16,
        marginLeft: 5,
        marginRight: 5
    },
    gemText: {
        color: colors.gray
    },
    gemQuantity: {
        marginLeft: 5,
        color: colors.main
    }
})