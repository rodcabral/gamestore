import React from 'react';
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#35343D',
                    borderRadius: 30,
                    height: 65,
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name="home" color={colors.main} size={26} />
                        </View>
                    )
                }} />
            <Tab.Screen
                name="Achievements"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name="award" color={colors.main} size={26} />
                        </View>
                    )
                }} />
            <Tab.Screen
                name="Store"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name="shopping-bag" color={colors.main} size={26} />
                        </View>
                    )
                }} />
            <Tab.Screen
                name="Config"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name="settings" color={colors.main} size={26} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

export default Tabs;