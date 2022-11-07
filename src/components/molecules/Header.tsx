import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors'

export const HeaderStack = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.stackContainer}>
      <View>{props.leftComponent}</View>
      {/*  */}
      {/* <View>
        {props.centerComponent}
      </View> */}
      {/*  */}
      <View>{props.rightComponent}</View>
    </View>
  )
}

export const HeaderSecondary = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      <View style={{ position: 'absolute', left: 0, paddingLeft: 16 }}>
        {props.leftComponent}
      </View>
      {/*  */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {props.centerComponent}
      </View>
      {/*  */}
      <View style={{ position: 'absolute', right: 12 }}>
        {props.rightComponent}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderWidth: 0.5,
    borderBottomColor: Colors.Gray10
  },
  stackContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderBottomColor: Colors.Gray5
  }
})
