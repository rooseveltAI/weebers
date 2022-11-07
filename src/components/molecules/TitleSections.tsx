import { useNavigation } from '@react-navigation/native'
import { HeadingMd } from '../../components/atoms/Typography'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryBtnUnstyled } from '../../components/atoms/Button'
import { BoldText, RegularText } from '../../components/atoms/StyledText'
import Colors from '../../constants/Colors'

const TitleSection = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {props.icon}
      <HeadingMd style={styles.title}>{props.title}</HeadingMd>
      <PrimaryBtnUnstyled>
        <RegularText style={styles.link}>{props.link}</RegularText>
      </PrimaryBtnUnstyled>
    </View>
  )
}
export default TitleSection

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  title: {
    paddingHorizontal: 8,
    flex: 1
  },
  link: {
    textDecorationLine: 'underline'
  }
})
