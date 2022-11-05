import {
  UserIcon,
  IconGroupSm,
  IconCommentSm,
  IconShare,
  IconHeart,
  IconSend,
  IconLocation,
  IconMore
} from '../../assets/icons'
import Divider from '../atoms/divider'
import { MediumText, RegularText, SemiboldText, BoldText } from '../StyledText'
import React from 'react'
import { Text, StyleSheet, Pressable, TextInput, View } from 'react-native'
import Button from '../atoms/button'

const ChatCard = (props: any) => {
  return (
    <View style={styles.chatCard}>
      <UserIcon style={{ width: 50, height: 50 }} />
      <View style={{ paddingHorizontal: 10, flex: 1 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <BoldText style={{ fontSize: 16 }}>Yoshua</BoldText>
          <RegularText
            style={{ fontSize: 12, opacity: 0.68, paddingHorizontal: 3 }}
          >
            @yoshua
          </RegularText>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            opacity: 0.68,
            paddingVertical: 4
          }}
        >
          <RegularText style={{ fontSize: 14 }}>Seen it!</RegularText>
          <RegularText style={{ fontSize: 12, paddingHorizontal: 5 }}>
            ·
          </RegularText>
          <RegularText style={{ fontSize: 12 }}>14m</RegularText>
        </View>
      </View>
      <IconMore />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  statusContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  scrollView: {}
})

export default ChatCard
