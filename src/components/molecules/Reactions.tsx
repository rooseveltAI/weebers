import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryBtnUnstyled } from '../../components/atoms/Button'
import { IconButtonUnstyled } from '../../components/atoms/IconButton'
import { TextXs } from '../../components/atoms/Typography'

const Reactions = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <PrimaryBtnUnstyled style={styles.groupRow}>
        <IconButtonUnstyled>{props.comment}</IconButtonUnstyled>
        <TextXs style={{ paddingHorizontal: 4 }}>{props.commentcount}</TextXs>
      </PrimaryBtnUnstyled>
      <PrimaryBtnUnstyled style={styles.groupRow}>
        <IconButtonUnstyled>{props.repost}</IconButtonUnstyled>
        <TextXs style={{ paddingHorizontal: 4 }}>{props.repostcount}</TextXs>
      </PrimaryBtnUnstyled>
      <PrimaryBtnUnstyled style={styles.groupRow}>
        <IconButtonUnstyled>{props.like}</IconButtonUnstyled>
        <TextXs style={{ paddingHorizontal: 4 }}>{props.likecount}</TextXs>
      </PrimaryBtnUnstyled>
      <PrimaryBtnUnstyled style={styles.groupRow}>
        <IconButtonUnstyled>{props.share}</IconButtonUnstyled>
      </PrimaryBtnUnstyled>
    </View>
  )
}
export default Reactions

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  groupRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
