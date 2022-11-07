import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors'

export const VerticalScroll = ({ children }: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: Colors.secondaryBlack }}
    >
      {children}
    </ScrollView>
  )
}

export const HorizontalScroll = ({ children }: any) => {
  const navigation = useNavigation()
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})
