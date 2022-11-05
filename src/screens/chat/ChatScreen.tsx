import { IconAdd, IconMore, IconPlus, UserIcon } from '../../assets/icons'
import Divider from '../../components/atoms/divider'
import PostCard from '../../components/organisms/PostCard'
import ProfileCard from '../../components/organisms/ProfileCard'
import {
  BoldText,
  RegularText,
  SemiboldText
} from '../../components/StyledText'
import React from 'react'
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import ChatCard from '../../components/organisms/ChatCard'

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Divider style={{ marginBottom: 0, marginTop: 5 }} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.statusContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <Pressable>
              <View style={{ alignItems: 'center' }}>
                <Pressable
                  style={{
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255,0.10)',
                    borderRadius: 980,
                    height: 63,
                    width: 63,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <UserIcon style={{ width: 50, height: 50 }} />
                  <Pressable style={styles.addIcon}>
                    <IconPlus />
                  </Pressable>
                </Pressable>
                <RegularText
                  style={{ fontSize: 12, opacity: 0.68, paddingTop: 5 }}
                >
                  My Status
                </RegularText>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <Divider />

        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />

        {/* <Divider /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  },

  statusContainer: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 5
  },
  scrollView: {},
  addIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})
