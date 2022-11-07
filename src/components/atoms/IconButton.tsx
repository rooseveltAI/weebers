import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import Pressable from '../Pressable'
import { useNavigation } from '@react-navigation/native'

export const IconButtonSolid = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.primaryBtn, ...props.btnStyle }}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  )
}

export const IconButtonOutline = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.outlineBtn, ...props.style }}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  )
}

export const IconButtonUnstyled = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.unstyledBtn, ...props.style }}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  primaryBtn: {
    width: 60,
    height: 60,
    borderRadius: 980,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  outlineBtn: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.Gray15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unstyledBtn: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
