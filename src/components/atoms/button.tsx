import { SemiboldText } from '../StyledText'
import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const Button = (props: any) => {
  return (
    <Pressable style={{ ...styles.button, ...props.style }}>
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 90)',
    borderRadius: 6,
    height: 25,
    paddingHorizontal: 8
  }
})

export default Button
