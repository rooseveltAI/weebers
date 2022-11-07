import { ProfileIcon } from '../../assets/icons'
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import Colors from '../../constants/Colors'
import Pressable from '../Pressable'
import { BoldText, MediumText, RegularText, SemiboldText } from './StyledText'

export const AvatarXl = (props: any) => {
  return (
    <Pressable activeOpacity={0.5} onPress={() => props.pressHandler}>
      <Image
        source={props.source}
        style={{ ...styles.avatar80, ...props.style }}
      />
    </Pressable>
  )
}

export const AvatarLg = (props: any) => {
  return (
    <Pressable activeOpacity={0.5} onPress={() => props.pressHandler}>
      <Image
        source={props.source}
        style={{ ...styles.avatar48, ...props.style }}
      />
    </Pressable>
  )
}

export const AvatarMd = (props: any) => {
  return (
    <Pressable activeOpacity={0.5} onPress={() => props.pressHandler}>
      <Image
        source={props.source}
        style={{ ...styles.avatar40, ...props.style }}
      />
    </Pressable>
  )
}

export const AvatarSm = (props: any) => {
  return (
    <Pressable activeOpacity={0.5} onPress={() => props.pressHandler}>
      <Image
        source={props.source}
        style={{ ...styles.avatar30, ...props.style }}
      />
    </Pressable>
  )
}

export const AvatarXs = (props: any) => {
  return (
    <Pressable activeOpacity={0.5} onPress={() => props.onPress}>
      <Image
        source={props.source}
        style={{ ...styles.avatar25, ...props.style }}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  avatar80: {
    backgroundColor: Colors.Gray10,
    borderWidth: 5,
    borderColor: Colors.secondaryBlack,
    borderRadius: 50,
    height: 85,
    width: 85
  },
  avatar48: {
    backgroundColor: Colors.Gray10,
    borderRadius: 50,
    height: 48,
    width: 48
  },
  avatar40: {
    backgroundColor: Colors.Gray10,
    borderRadius: 50,
    height: 40,
    width: 40
  },
  avatar30: {
    backgroundColor: Colors.Gray10,
    borderRadius: 50,
    height: 30,
    width: 30
  },
  avatar25: {
    backgroundColor: Colors.Gray10,
    borderRadius: 50,
    height: 24,
    width: 24
  }
})
