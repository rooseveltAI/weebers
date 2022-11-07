import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import * as React from 'react'

import { StyleSheet, View } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

import { BottomTabParamList, HomeNavigatorParamList } from '../../types'
import ARCallScreen from '../screens/call/ARCallScreen'
import ChatScreen from '../screens/chat/ChatScreen'
import HomeScreen from '../screens/home/HomeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import SwipeScreen from '../screens/swipe/SwipeScreen'

import { LogoWebelong, ProfileIcon } from '../assets/icons'

import {
  Chat,
  Home,
  Notification,
  Search,
  Video,
  Voice
} from 'react-native-iconly'

import { IconButtonUnstyled } from '../components/atoms/IconButton'
// import Header from '../components/molecules/Header'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          height: 85,
          borderTopWidth: 0.5,
          borderTopColor: Colors.Gray5,
          alignItems: 'center',
          paddingVertical: 8
        },
        tabBarActiveTintColor: Colors[colorScheme].tint
        // tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Home set="curved" size={24} color={color} />
          ),
          headerShown: false
        }}
      />

      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: 'Chat',
          // header: () => <Header title="Chats" />,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Chat set="curved" size={24} color={color} />
          )
        }}
      />

      <BottomTab.Screen
        name="Ar"
        component={ARCallScreen}
        options={{
          title: 'AR Call',
          tabBarIcon: ({ color }) => (
            <Video
              color={color}
              set="curved"
              size={24}
              //   stroke="bold"
              // size="large"
            />
          )
        }}
      />

      <BottomTab.Screen
        name="Swipe"
        component={SwipeScreen}
        options={{
          title: 'Swipe',
          tabBarIcon: ({ color }) => (
            <Voice
              color={color}
              size={24}
              // set="curved"
            />
          )
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <ProfileIcon name="profile" color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Home set="curved" {...props} />
}

const HomeStack = createStackNavigator<HomeNavigatorParamList>()

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerRightContainerStyle: {
            paddingRight: 12
          },
          headerLeftContainerStyle: {
            paddingLeft: 0
          },
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTitle: () => <LogoWebelong size={24} />,
          headerShadowVisible: false,
          headerRight: () => (
            <View style={styles.headerRight}>
              <IconButtonUnstyled>
                <Search size={24} color={Colors.dark.tint} />
              </IconButtonUnstyled>
              <IconButtonUnstyled>
                <Notification size={24} color={Colors.dark.tint} />
              </IconButtonUnstyled>
            </View>
          )
        }}
      />
    </HomeStack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    width: '35%'
  }
})
