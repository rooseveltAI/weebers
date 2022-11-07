import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryBtnUnstyled } from '../../components/atoms/Button'
import { IconButtonUnstyled } from '../../components/atoms/IconButton'
import { HeavyText } from '../../components/atoms/StyledText'
import { TextLg, TextXs } from '../../components/atoms/Typography'
import Colors from '../../constants/Colors'

const PostHeaderDetails = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {props.avatar}
      <View style={styles.groupColumn}>
        <View style={styles.groupRow}>
          <View style={styles.asideGroupRow}>
            <TextLg>{props.username}</TextLg>
            <TextXs style={{ paddingHorizontal: 4 }}>{props.userhandle}</TextXs>
            <TextXs>{props.pronounce}</TextXs>
            <HeavyText
              style={{
                paddingHorizontal: 4,
                fontSize: 12,
                color: Colors.Color5
              }}
            >
              ·
            </HeavyText>
            <TextXs>{props.timestamp}</TextXs>
          </View>

          <IconButtonUnstyled>{props.button}</IconButtonUnstyled>
        </View>
        <PrimaryBtnUnstyled style={{ ...props.style }}>
          {props.tag}
        </PrimaryBtnUnstyled>
      </View>
    </View>
  )
}
export default PostHeaderDetails

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4
  },
  groupColumn: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 4
  },
  groupRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  asideGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  tag: {
    backgroundColor: Colors.ADimYellow
  }
})
