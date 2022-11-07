import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { Chat, Heart, People } from 'react-native-iconly'
import { IconMore, IconRepost, IconShare } from '../../assets/icons'
import { AvatarLg } from '../../components/atoms/Avatar'
import { Tag } from '../../components/atoms/TagsButton'
import { TextXs } from '../../components/atoms/Typography'
import { CommentInputBox } from '../../components/molecules/Inputs'
import PostArticleDetails from '../../components/molecules/PostArticleDetails'
import PostHeaderDetails from '../../components/molecules/PostHeaderDetails'
import Reactions from '../../components/molecules/Reactions'
import Colors from '../../constants/Colors'
import CommentCard from './CommentCard'

const PostCard = (props: any) => {
  return (
    <View style={styles.container}>
      <PostHeaderDetails
        avatar={<AvatarLg />}
        username="Tracy Kisha"
        userhandle="@tracyyy"
        pronounce="(She/Her)"
        timestamp="14m"
        button={<IconMore />}
        tag={() => (
          <Tag style={{ backgroundColor: Colors.ADimYellow }}>
            <People set="curved" size={14} color={Colors.AVibrantYellow} />
            <TextXs
              style={{
                paddingHorizontal: 4,
                fontSize: 10,
                color: Colors.AVibrantYellow
              }}
            >
              Daily Inspirations
            </TextXs>
          </Tag>
        )}
      />
      <PostArticleDetails
        excerpt="Was walking down the budha house today, You want socks with those, bro?
      asks the office assistant, as he gingerly slips on a pair of open-toe
      leopard print wedge platforms..."
        button="Continue Reading..."
        image={
          <Image
            source={require('../../assets/images/Image.png')}
            style={{ ...styles.image, ...props.style }}
          />
        }
      />
      <View style={{ paddingHorizontal: 12 }}>
        <Reactions
          comment={<Chat stroke="bold" size={20} color={Colors.Color5} />}
          commentcount="12"
          repost={<IconRepost />}
          repostcount="10"
          like={<Heart stroke="bold" size={20} color={Colors.Color5} />}
          share={<IconShare />}
        />
      </View>

      <CommentCard />
      <CommentInputBox />
    </View>
  )
}

export default PostCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width
    // justifyContent: 'center'
  },
  image: {
    width: Dimensions.get('window').width,
    maxWidth: '100%',
    height: 280,
    backgroundColor: Colors.Gray5,
    resizeMode: 'fill'
  }
})
