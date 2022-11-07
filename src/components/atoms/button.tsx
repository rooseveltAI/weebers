import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Pressable from '../Pressable'
import { AvatarSm } from './Avatar'
import { MediumText, SemiboldText } from './StyledText'

export const PrimaryBtn = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.primaryBtn, ...props.btnStyle }}
      onPress={() => props.pressHandler}
    >
      {props.children}
    </Pressable>
  )
}

export const PrimaryBtnUnstyled = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.primaryUnstyledBtn, ...props.style }}
      onPress={() => props.pressHandler}
    >
      {props.children}
    </Pressable>
  )
}

export const SecondaryBtn = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.secondaryBtn, ...props.style }}
    >
      {props.children}
    </Pressable>
  )
}

export const SecondaryBtnOutline = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.secondaryOutlineBtn, ...props.style }}
    >
      {props.children}
    </Pressable>
  )
}

export const TabBtnSolid = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.tabBtnSolid, ...props.style }}
    >
      <AvatarSm />
      <SemiboldText style={{ paddingHorizontal: 4, fontSize: 15 }}>
        {props.title}
      </SemiboldText>
    </Pressable>
  )
}
export const TabBtnFlushed = (props: any) => {
  return (
    <Pressable
      activeOpacity={0.5}
      style={{ ...styles.tabBtnFlushed, ...props.style }}
    >
      <AvatarSm />
      <SemiboldText style={styles.tabBtnFlushedText}>
        {props.title}
      </SemiboldText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  primaryBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    borderRadius: 980,
    height: 35,
    alignItems: 'center'
  },
  primaryText: {
    color: Colors.primaryWhite
  },
  primaryUnstyledBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  primaryUnstyledBtnText: {
    color: Colors.primarySpringBud,
    fontSize: 16
  },
  secondaryBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Gray15,
    borderRadius: 980,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  secondaryOutlineBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.Gray15,
    borderRadius: 980,
    paddingHorizontal: 16,
    paddingVertical: 5
  },
  tabBtnSolid: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6,
    paddingLeft: 6,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 980,
    flexDirection: 'row',
    marginRight: 8
  },
  tabBtnFlushed: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6,
    paddingLeft: 6,
    borderRadius: 980,
    flexDirection: 'row',
    marginRight: 8
  },
  tabBtnFlushedText: {
    paddingHorizontal: 4,
    fontSize: 15,
    color: Colors.Color5
  }
})
