/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import {
  ColorSchemeName,
  Pressable,
  Platform,
  StyleSheet,
  View
} from 'react-native'
import Constants from 'expo-constants'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import HomeScreen from '../screens/home/HomeScreen'
import ChatScreen from '../screens/chat/ChatScreen'
import ARCallScreen from '../screens/call/ARCallScreen'
import SwipeScreen from '../screens/swipe/SwipeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import PostScreen from '../screens/post/PostScreen'
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps
} from '../../types'
import LinkingConfiguration from './LinkingConfiguration'
import {
  IconAdd,
  IconBell,
  IconChat,
  IconGroup,
  IconHome,
  IconSearch,
  IconVideo,
  IconVoice,
  UserIcon
} from '../assets/icons'
import WebelongLogo from '../assets/images/webelong-logo.svg'
import Header from '../components/molecules/Header'

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {/* <Stack.Navigator> */}

      <RootNavigator />
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          statusBarColor: '#fff',
          headerShown: false
        }}
      /> */}

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000', height: 80 },
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'HomeTab'>) => ({
          title: 'Home',
          header: () => (
            <View style={styles.header}>
              <WebelongLogo />
              <View style={styles.rightAside}>
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1
                  })}
                >
                  <IconGroup />
                </Pressable>
                <Pressable>
                  <IconSearch />
                </Pressable>
                <Pressable>
                  <IconBell />
                </Pressable>
              </View>
            </View>
          ),

          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <IconHome name="home" color={color} />
        })}
      />

      <BottomTab.Screen
        name="ChatTab"
        component={ChatScreen}
        options={{
          title: 'Chat',
          header: () => <Header title="Chats" content={<IconAdd />} />,
          tabBarIcon: ({ color }) => <IconChat name="chat" color={color} />
        }}
      />

      <BottomTab.Screen
        name="CallTab"
        component={ARCallScreen}
        options={{
          title: 'AR Call',
          tabBarIcon: ({ color }) => <IconVideo name="call" color={color} />
        }}
      />

      <BottomTab.Screen
        name="SwipeTab"
        component={SwipeScreen}
        options={{
          title: 'Spaces',
          tabBarIcon: ({ color }) => <IconVoice name="swipe" color={color} />
        }}
      />

      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <UserIcon name="profile" color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}

const styles = StyleSheet.create({
  header: {
    paddingTop:
      Platform.OS === 'ios'
        ? Constants.statusBarHeight + 10
        : Constants.statusBarHeight - 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 8,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 8,
    // height: 90,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#000'
  },

  rightAside: {
    width: 122,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
