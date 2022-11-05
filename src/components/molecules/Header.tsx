import { IconGroup, IconSearch, IconBell } from 'assets/icons'
import { BoldText, HeavyText } from '../StyledText'
import Constants from 'expo-constants'
import React from 'react'
import { Text, StyleSheet, Pressable, View, Platform } from 'react-native'

const Header = (props: any) => {
  return (
    <View style={styles.header}>
      <HeavyText style={{ fontSize: 24 }}>{props.title}</HeavyText>
      <View style={styles.rightAside}>
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1
          })}
        >
          {props.content}
        </Pressable>
      </View>
    </View>
  )
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
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default Header
