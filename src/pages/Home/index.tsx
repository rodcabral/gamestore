import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import data from '../../services/games.json';

import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
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
                    <Image source={{ uri: "https://pbs.twimg.com/media/DAw4aVpWAAEreK8.jpg" }} style={styles.profileImage} />
                </View>
                <View style={styles.searchContainer}>
                    <Feather name="search" size={24} color={colors.main} />
                    <TextInput style={styles.searchInput} placeholder="Search game" placeholderTextColor={colors.gray} />
                </View>
                <View style={styles.gendersContainer}>
                    <TouchableOpacity activeOpacity={0.6}>
                        <LinearGradient colors={["#66FFAC", "#00FF75"]} style={styles.genderBox}>
                            <Image style={styles.genderImage} source={require('../../assets/sword.png')} />
                        </LinearGradient>
                        <Text style={styles.genderName}>RPG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <LinearGradient colors={["#66FFAC", "#00FF75"]} style={styles.genderBox}>
                            <Image style={styles.genderImage} source={require('../../assets/chess-piece.png')} />
                        </LinearGradient >
                        <Text style={styles.genderName}>Strategy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <LinearGradient colors={["#66FFAC", "#00FF75"]} style={styles.genderBox}>
                            <Image style={styles.genderImage} source={require('../../assets/security.png')} />
                        </LinearGradient >
                        <Text style={styles.genderName}>Arcade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <LinearGradient colors={["#66FFAC", "#00FF75"]} style={styles.genderBox}>
                            <Image style={styles.genderImage} source={require('../../assets/vs.png')} />
                        </LinearGradient >
                        <Text style={styles.genderName}>MOBA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <LinearGradient colors={["#66FFAC", "#00FF75"]} style={styles.genderBox}>
                            <Image style={styles.genderImage} source={require('../../assets/targeting.png')} />
                        </LinearGradient>
                        <Text style={styles.genderName}>FPS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mostDownloadedContainer}>
                    <Text style={styles.sectionTitle}>Most Downloaded</Text>
                    <FlatList
                        data={data.mostDownloaded}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.7} key={item.id}>
                                <Image style={styles.mostDownloadedImage} source={{ uri: item.cover }} />
                            </TouchableOpacity>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <View style={styles.recommendedContainer}>
                    <Text style={styles.sectionTitle}>Recommended</Text>
                    <FlatList
                        data={data.recommended}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.7} key={item.id} style={styles.recommendedContent}>
                                <Image style={styles.recommendedImage} source={{ uri: item.cover }} />
                                <Text style={styles.gameName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.upcomingContainer}>
                    <Text style={styles.sectionTitle}>Upcoming</Text>
                    <View style={styles.upcomingGame}>
                        <Image style={styles.upcomingGameImage} source={{ uri: "https://mundoconectado.com.br/uploads/chamadas/project-cars-go-data-lancamento-smartphones-capa.jpg" }} />
                        <View style={styles.aboutUpcomingGame}>
                            <Text style={styles.upcomingGameTitle}>Project Cars: GO</Text>
                            <Text style={styles.upcomingGameAbout}>Project Cars is the long-awaited mobile spinoff to developer Slightly Mad Studios’ popular racing sim series.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        paddingHorizontal: 15,
    },
    greetings: {
    },
    title: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.heading,
        marginBottom: 2
    },
    subtitle: {
        color: colors.gray,
        fontSize: 13,
        fontFamily: fonts.text
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.main,
    },
    searchContainer: {
        backgroundColor: colors.dark_gray,
        height: 45,
        marginHorizontal: 15,
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
        paddingHorizontal: 15,
        marginTop: 30,
    },
    genderBox: {
        width: 55,
        height: 55,
        backgroundColor: colors.main,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    genderImage: {
        width: 32,
        height: 32,
    },
    genderName: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: fonts.medium,
        marginTop: 6
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
    },
    mostDownloadedContainer: {
        marginTop: 30,
        paddingLeft: 15,
    },
    sectionTitle: {
        marginBottom: 10,
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.medium
    },
    mostDownloadedImage: {
        width: 153,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
    },
    recommendedContainer: {
        marginTop: 30,
        paddingLeft: 15,
    },
    recommendedImage: {
        width: 110,
        height: 70,
        marginRight: 10,
        borderRadius: 5
    },
    recommendedContent: {

    },
    gameName: {
        fontSize: 13,
        color: colors.white,
        fontFamily: fonts.text,
        marginTop: 6,
        textAlign: 'center',
    },
    upcomingContainer: {
        marginTop: 30,
        paddingHorizontal: 15,
        paddingBottom: 100
    },
    upcomingGame: {
        flexDirection: 'row'
    },
    upcomingGameImage: {
        width: 100,
        height: 120,
        borderRadius: 5,
        marginRight: 10
    },
    aboutUpcomingGame: {

    },
    upcomingGameTitle: {
        fontSize: 15,
        color: colors.white,
        fontFamily: fonts.medium,
    },
    upcomingGameAbout: {
        fontFamily: fonts.text,
        color: colors.gray,
        width: 225,
        marginTop: 6,
        fontSize: 13
    }
})