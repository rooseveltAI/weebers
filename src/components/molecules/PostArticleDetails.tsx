import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { PrimaryBtnUnstyled } from '../../components/atoms/Button'
import { BoldText } from '../../components/atoms/StyledText'
import { TextMd } from '../../components/atoms/Typography'
import Colors from '../../constants/Colors'

const PostArticleDetails = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.groupColumn}>
        <TextMd style={styles.text}>{props.excerpt}</TextMd>
        <PrimaryBtnUnstyled
          style={{ PaddingVertical: 8 }}
          onPress={props.onPress}
        >
          <BoldText style={styles.moreText}>{props.button}</BoldText>
        </PrimaryBtnUnstyled>
      </View>
      {props.image}
    </View>
  )
}
export default PostArticleDetails

const styles = StyleSheet.create({
  container: {
    //
    paddingVertical: 12,
    alignItems: 'flex-start'
  },
  groupColumn: {
    paddingHorizontal: 12,
    alignItems: 'flex-start'
  },
  text: {
    color: Colors.Color10,
    lineHeight: 22,
    opacity: 0.87
  },
  moreText: {
    fontSize: 14,
    color: Colors.Link,
    letterSpacing: 0.5,
    lineHeight: 20,
    paddingVertical: 8
  }

  // image: {
  //   width: Dimensions.get('window').width,
  //   maxWidth: '100%',
  //   height: 280,
  //   backgroundColor: Colors.Gray5,
  //   marginTop: 8
  // }
})
