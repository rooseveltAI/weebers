import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Edit } from 'react-native-iconly'
import { IconButtonSolid } from '../atoms/IconButton'
import Colors from '../../constants/Colors'

const FloatingAction = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('NewPost')
  }

  return (
    <View style={styles.container}>
      <View style={styles.floatingButtonStyle}>
        <IconButtonSolid onPress={onPress}>
          <Edit set="bold" color="white" />
        </IconButtonSolid>
      </View>
    </View>
  )
}

export default FloatingAction

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 20
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    backgroundColor: Colors.secondaryBlack,
    borderRadius: 980,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
