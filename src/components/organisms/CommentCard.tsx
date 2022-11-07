import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Chat, Heart } from 'react-native-iconly'
import { IconMore, IconRepost, IconShare } from '../../assets/icons'
import { AvatarMd } from '../../components/atoms/Avatar'
import { PrimaryBtnUnstyled } from '../../components/atoms/Button'
import { TextMd, TextXs } from '../../components/atoms/Typography'
import PostHeaderDetails from '../../components/molecules/PostHeaderDetails'
import Reactions from '../../components/molecules/Reactions'
import Colors from '../../constants/Colors'

const CommentCard = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <AvatarMd />
      <View style={styles.group}>
        <PostHeaderDetails
          username="Jane"
          userhandle="@janejenny"
          pronounce="(She/Her)"
          timestamp="20s"
          button={<IconMore />}
          tag={
            <PrimaryBtnUnstyled
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <TextXs
                style={{
                  fontSize: 11
                }}
              >
                Replying to
              </TextXs>
              <TextXs
                style={{
                  paddingHorizontal: 2,
                  fontSize: 11,
                  color: Colors.Link
                }}
              >
                @tracyyy
              </TextXs>
            </PrimaryBtnUnstyled>
          }
        />

        <View style={{ flex: 1, paddingHorizontal: 8, paddingVertical: 4 }}>
          <TextMd style={styles.text}>
            Thanks for sharing Tracy, great journey!
          </TextMd>
        </View>

        <View style={{ paddingRight: 4 }}>
          <Reactions
            comment={<Chat stroke="bold" size={20} color={Colors.Color5} />}
            commentcount="12"
            repost={<IconRepost />}
            repostcount="10"
            like={<Heart stroke="bold" size={20} color={Colors.Color5} />}
            share={<IconShare />}
          />
        </View>
      </View>
    </View>
  )
}
export default CommentCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 8,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: Colors.Gray10,
    borderRadius: 20,
    marginHorizontal: 12,
    marginVertical: 12
  },
  group: {
    flex: 1
  },
  text: {
    color: Colors.Color10,
    lineHeight: 20,
    opacity: 0.87,
    fontSize: 15
  }
})
