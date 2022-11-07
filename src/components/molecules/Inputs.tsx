import { AvatarSm } from '../../components/atoms/Avatar'
import { IconButtonUnstyled } from '../../components/atoms/IconButton'
import React, { useState, useEffect } from 'react'
import { Keyboard, Text, TextInput, StyleSheet, View } from 'react-native'
import { Send } from 'react-native-iconly'
import Colors from '../../constants/Colors'

export const CommentInputBox = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown')
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden')
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return (
    <View style={styles.commentBox}>
      <View style={styles.formContainer}>
        <View style={{ alignSelf: 'flex-start', paddingVertical: 10 }}>
          <AvatarSm source={require('../../assets/images/user-img.jpg')} />
        </View>

        <TextInput
          style={styles.input}
          multiline={true}
          placeholder={'Comment'}
          placeholderTextColor={Colors.Color5}
          onSubmitEditing={Keyboard.dismiss}
        />
        <View
          style={{
            alignSelf: 'flex-end',
            paddingVertical: 12,
            justifyContent: 'center'
          }}
        >
          <IconButtonUnstyled style={{ alignSelf: 'center' }}>
            <Send set="bold" color={Colors.Color10} />
          </IconButtonUnstyled>
        </View>
      </View>

      {/* <Text style={styles.status}>{keyboardStatus}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36
  },
  //   status: {
  //     padding: 10,
  //     textAlign: 'center'
  //   },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 12,
    backgroundColor: Colors.Gray10,
    borderRadius: 25
  },
  input: {
    flex: 1,
    width: '80%',
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: '#fff'
  },
  commentBox: { paddingHorizontal: 12, alignItems: 'center' }
})
