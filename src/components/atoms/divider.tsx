import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed'

export default function Divider(props: any) {
  return (
    <View
      style={{ ...styles.separator, ...props.style }}
      //   lightColor="#eee"
      darkColor="#0D0D0D"
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%'
  }
})
