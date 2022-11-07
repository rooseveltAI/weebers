import { ProfileIcon } from '../../assets/icons'
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import Colors from '../../constants/Colors'
import Pressable from '../Pressable'
import {
  BoldText,
  HeavyText,
  MediumText,
  RegularText,
  SemiboldText
} from './StyledText'

//  Heading

export const HeadingXl = (props: any) => {
  return (
    <HeavyText style={{ ...styles.headingXl32, ...props.style }}>
      {props.children}
    </HeavyText>
  )
}

export const HeadingLg = (props: any) => {
  return (
    <HeavyText style={{ ...styles.headingLg24, ...props.style }}>
      {props.children}
    </HeavyText>
  )
}

export const HeadingMd = (props: any) => {
  return (
    <BoldText style={{ ...styles.headingMd20, ...props.style }}>
      {props.children}
    </BoldText>
  )
}

export const HeadingSm = (props: any) => {
  return (
    <BoldText style={{ ...styles.headingSm18, ...props.style }}>
      {props.children}
    </BoldText>
  )
}

export const HeadingXs = (props: any) => {
  return (
    <SemiboldText style={{ ...styles.headingXs16, ...props.style }}>
      {props.children}
    </SemiboldText>
  )
}

//  Body Text

export const TextXl = (props: any) => {
  return (
    <SemiboldText style={{ ...styles.textXl18, ...props.style }}>
      {props.children}
    </SemiboldText>
  )
}

export const TextLg = (props: any) => {
  return (
    <MediumText style={{ ...styles.textLg16, ...props.style }}>
      {props.children}
    </MediumText>
  )
}

export const TextMd = (props: any) => {
  return (
    <RegularText style={{ ...styles.textMd16, ...props.style }}>
      {props.children}
    </RegularText>
  )
}

export const TextSm = (props: any) => {
  return (
    <RegularText style={{ ...styles.textSm14, ...props.style }}>
      {props.children}
    </RegularText>
  )
}

export const TextXs = (props: any) => {
  return (
    <RegularText style={{ ...styles.textXs12, ...props.style }}>
      {props.children}
    </RegularText>
  )
}

const styles = StyleSheet.create({
  headingXl32: { fontSize: 32, letterSpacing: 0.15 },
  headingLg24: { fontSize: 24, letterSpacing: 0.15 },
  headingMd20: { fontSize: 20, letterSpacing: 0.15 },
  headingSm18: { fontSize: 18, letterSpacing: 0.15 },
  headingXs16: { fontSize: 16, letterSpacing: 0.15 },
  //
  textXl18: { fontSize: 18, letterSpacing: 0.15 },
  textLg16: { fontSize: 16, letterSpacing: 0.15 },
  textMd16: { fontSize: 16, letterSpacing: 0.15 },
  textSm14: { fontSize: 14, letterSpacing: 0.15, color: Colors.Color5 },
  textXs12: { fontSize: 12, letterSpacing: 0.15, color: Colors.Color5 }
})
