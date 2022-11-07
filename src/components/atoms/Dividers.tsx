import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Color from '../../constants/Colors'
import { View } from '../Themed'
import { HeavyText } from './StyledText'

export const HDivider = (props: any) => {
  return (
    <View
      style={{ ...styles.hSeparator, ...props.style }}
      darkColor={Color.Gray10}
    />
  )
}
export const VDivider = (props: any) => {
  return (
    <View
      style={{ ...styles.vSeparator, ...props.style }}
      darkColor={Color.Gray10}
    />
  )
}

export const DotSeparator = (props: any) => {
  return (
    <HeavyText style={{ ...styles.dSeparator, ...props.style }}>·</HeavyText>
  )
}

const styles = StyleSheet.create({
  hSeparator: {
    marginVertical: 10,
    height: 0.5,
    width: '100%'
  },
  vSeparator: {
    marginHorizontal: 10,
    height: '100%',
    width: 0.5,
    transform: [{ rotate: '90deg' }]
  },
  dSeparator: {
    paddingHorizontal: 4,
    fontSize: 12,
    color: Colors.Color5
  }
})
