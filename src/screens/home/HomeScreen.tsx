import {
  Pressable,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

import React from 'react'
import { RootTabScreenProps } from '../../../types'
import {
  IconAdd,
  IconLocation,
  IconSend,
  IconSendFill,
  UserIcon
} from '../../assets/icons'
import Divider from '../../components/atoms/divider'
import PostCard from '../../components/organisms/PostCard'
import {
  BoldText,
  RegularText,
  SemiboldText
} from '../../components/StyledText'
import { View } from '../../components/Themed'
import Button from '../../components/atoms/button'
import ProfileCard from '../../components/organisms/ProfileCard'

const Tab = ({ title }: any) => {
  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={styles.buttonInactive}>
        <RegularText>{title}</RegularText>
      </View>
    </TouchableHighlight>
  )
}

export default function HomeScreen({
  navigation
}: RootTabScreenProps<'HomeTab'>) {
  return (
    <SafeAreaView style={styles.container}>
      <Divider style={{ marginBottom: 0, marginTop: 5 }} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.tabsContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <Tab title="Anime Lovers" />
            <Tab title="Memes" />
            <Tab title="Arts and Culture" />
            <Tab title="GenZ" />
          </ScrollView>
          <Pressable>
            <IconAdd />
          </Pressable>
        </View>

        <Divider />
        <PostCard />
        <Divider />
        <View style={styles.alignH}>
          <BoldText style={{ fontSize: 18 }}>Recommended Profiles</BoldText>
          <Button style={{ paddingHorizontal: 10 }}>
            <SemiboldText
              style={{
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: 0.5
              }}
            >
              Add all
            </SemiboldText>
          </Button>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 10, paddingVertical: 10 }}
        >
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </ScrollView>

        <Divider />
        <PostCard />
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={}
        style={styles.touchableOpacityStyle}
      >
        <Pressable style={styles.floatingButtonStyle}>
          <IconSendFill />
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  scrollView: {
    flex: 1,
    borderRadius: 10
  },
  alignH: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 0
  },

  buttonInactive: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 980,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 20
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 980,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CAFF53'
  }
})
