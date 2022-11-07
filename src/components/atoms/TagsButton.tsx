import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import Pressable from '../Pressable'
import { useNavigation } from '@react-navigation/native'

export const Tag = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.tag, ...props.style }}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 980
  }
})
