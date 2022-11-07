import { useNavigation } from '@react-navigation/native'
import { TabBtnFlushed, TabBtnSolid } from '../../components/atoms/Button'
import { IconButtonUnstyled } from '../../components/atoms/IconButton'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Plus } from 'react-native-iconly'
import Colors from '../../constants/Colors'

const PillTabs = (props: any) => {
  const navigation = useNavigation()

  return (
    <View style={styles.tabsContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <TabBtnSolid title="Explore" />
        <TabBtnFlushed title="Anime Lovers" />
        <TabBtnFlushed title="Photograpgy" />
        <TabBtnFlushed title="Meme" />
      </ScrollView>
      <IconButtonUnstyled>
        <Plus set="curved" color={Colors.primaryWhite} />
      </IconButtonUnstyled>
    </View>
  )
}
export default PillTabs

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    borderRadius: 10
  },

  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 0
  }
})
