import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors'

const Header = (props: any) => {
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
export default Header

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderWidth: 0.5,
    borderBottomColor: Colors.Gray10
  }
})
