import {
  UserIcon,
  IconGroupSm,
  IconCommentSm,
  IconShare,
  IconHeart,
  IconSend
} from '../../assets/icons'
import Divider from '../atoms/divider'
import { MediumText, RegularText, SemiboldText, BoldText } from '../StyledText'
import React from 'react'
import { Text, StyleSheet, Pressable, TextInput, View } from 'react-native'

const PostCard = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.postCard}>
        <View style={styles.header}>
          <UserIcon style={{ height: 45, width: 45 }} />
          <View style={{ paddingHorizontal: 10, flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MediumText style={{ fontSize: 15 }}>Tracy</MediumText>
              <RegularText style={styles.textSm}>@tracyy</RegularText>
              <RegularText style={styles.textSm}>·</RegularText>
              <RegularText style={{ fontSize: 10, opacity: 0.8 }}>
                14m
              </RegularText>
            </View>
            <Pressable style={styles.tagSm}>
              <IconGroupSm />
              <RegularText
                style={{ fontSize: 10, paddingHorizontal: 3, opacity: 0.68 }}
              >
                Memes
              </RegularText>
            </Pressable>
          </View>
          <Pressable style={styles.buttonSm}>
            <SemiboldText
              style={{
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: 0.2,
                opacity: 0.9
              }}
            >
              Add Friend
            </SemiboldText>
          </Pressable>
        </View>
        <View style={styles.article}>
          <RegularText>My Journey walking the Buda temple </RegularText>
          <Pressable onPress={props.onPress}>
            <BoldText>Read</BoldText>
          </Pressable>
        </View>
        <View style={styles.imageSlide}>
          <View></View>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.alignHSm}>
            <IconCommentSm />
            <RegularText
              style={{
                fontSize: 10,
                letterSpacing: 0.5,
                paddingHorizontal: 5,
                opacity: 0.68
              }}
            >
              12 Comments
            </RegularText>
          </Pressable>
          <View style={styles.alignHSm}>
            <Pressable style={{ paddingHorizontal: 20 }}>
              <IconShare />
            </Pressable>
            <Pressable>
              <IconHeart />
            </Pressable>
          </View>
        </View>

        <View style={styles.userComment}>
          <View style={styles.header}>
            <UserIcon style={{ height: 35, width: 35 }} />
            <View style={{ paddingHorizontal: 10 }}>
              <View style={styles.alignHSm}>
                <MediumText style={{ fontSize: 15 }}>Jane</MediumText>
                <RegularText style={styles.textSm}>@janejenny</RegularText>
                <RegularText style={styles.textSm}>·</RegularText>
                <RegularText style={{ fontSize: 10, opacity: 0.8 }}>
                  5m
                </RegularText>
              </View>
              <View style={styles.alignHMd}>
                <RegularText style={{ width: '80%', fontSize: 13 }}>
                  Great journey, thanks for sharing!
                </RegularText>
                <RegularText
                  style={{
                    fontSize: 12,
                    textTransform: 'uppercase',
                    opacity: 0.68,
                    letterSpacing: 0.32
                  }}
                >
                  Reply
                </RegularText>
              </View>
            </View>
          </View>
        </View>
        <Divider />
        <View style={styles.commentBox}>
          <View style={styles.formContainer}>
            <UserIcon style={{ height: 25, width: 25 }} />

            <TextInput placeholder="Comment" style={styles.input} />
            <Pressable style={styles.sendButton}>
              <IconSend />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 5,
    // paddingVertical: 0,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)'
  },
  input: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#fff'
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  buttonInactive: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 980,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10
  },

  postCard: {
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center'
  },
  textSm: {
    fontSize: 10,
    paddingHorizontal: 3,
    opacity: 0.8
  },
  tagSm: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    alignSelf: 'flex-start',
    borderRadius: 50
  },
  buttonSm: {
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.90)',
    borderRadius: 6,
    paddingHorizontal: 6,
    // paddingVertical: 4,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  article: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    opacity: 0.98
  },
  imageSlide: {
    width: '100%',
    height: 375,
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  alignHSm: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  alignHMd: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.98
  },
  userComment: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(255, 255, 255, 0.05)'
  },
  commentBox: { paddingHorizontal: 5, alignItems: 'center' }
})

export default PostCard
