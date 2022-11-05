import {
  UserIcon,
  IconGroupSm,
  IconCommentSm,
  IconShare,
  IconHeart,
  IconSend,
  IconLocation
} from '../../assets/icons'
import Divider from '../atoms/divider'
import { MediumText, RegularText, SemiboldText, BoldText } from '../StyledText'
import React from 'react'
import { Text, StyleSheet, Pressable, TextInput, View } from 'react-native'
import Button from '../atoms/button'

const ProfileCard = (props: any) => {
  return (
    <View style={styles.profileCard}>
      <UserIcon style={{ width: 80, height: 80 }} />
      <View style={styles.sectionOne}>
        <BoldText style={{ fontSize: 16 }}>Marshall Chad</BoldText>
        <RegularText
          style={{ fontSize: 12, opacity: 0.68, paddingVertical: 5 }}
        >
          (He/They)
        </RegularText>
        <View style={{ flexDirection: 'row', opacity: 0.68 }}>
          <RegularText style={{ fontSize: 12 }}>23 yrs old</RegularText>
          <RegularText style={{ fontSize: 12, paddingHorizontal: 5 }}>
            ·
          </RegularText>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconLocation />
            <RegularText style={{ paddingHorizontal: 2 }}>
              Carlifornia
            </RegularText>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5
        }}
      >
        <UserIcon />
        <RegularText
          style={{ fontSize: 12, paddingHorizontal: 5, opacity: 0.68 }}
        >
          1 mutual friends
        </RegularText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10
        }}
      >
        <Button style={{ paddingHorizontal: 10 }}>
          <SemiboldText
            style={{
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}
          >
            Add friend
          </SemiboldText>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  sectionOne: {
    paddingVertical: 10
  },
  profileCard: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 25,
    marginRight: 15
  },
  alignH: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

export default ProfileCard
