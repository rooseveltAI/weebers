import { SafeAreaView, StyleSheet, View } from 'react-native'

import React from 'react'
import { HDivider } from '../../components/atoms/Dividers'
import PostCard from '../../components/organisms/PostCard'

import { People, User } from 'react-native-iconly'
import FloatingAction from '../../components/molecules/FloatingAction'
import PillTabs from '../../components/molecules/PillTabs'
import TitleSection from '../../components/molecules/TitleSections'
import ProfileCard from '../../components/organisms/ProfileCard'
import {
  HorizontalScroll,
  VerticalScroll
} from '../../components/templates/ScrollViews'
import Colors from '../../constants/Colors'
import { TextSm } from '../../components/atoms/Typography'
import CommunityCard from '../../components/organisms/CommunityCard'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HDivider style={{ marginBottom: 0, marginTop: 5 }} />
      <VerticalScroll>
        {/* Community Tabs */}
        <PillTabs />
        <HDivider style={{ marginVertical: 12 }} />
        {/* Feed */}
        <PostCard />
        <HDivider style={{ marginVertical: 20 }} />
        <PostCard />
        <HDivider style={{ marginVertical: 20 }} />
        <TitleSection
          icon={<User set="bold" primaryColor={Colors.AVibrantYellow} />}
          title="Friends near you"
          link="See All"
        />
        <HorizontalScroll>
          <ProfileCard
            headerImage={require('../../assets/images/head_yosh.png')}
            avatar={require('../../assets/images/yosh.png')}
            username="Yoshua"
            pronounce="(He/They)"
            userhandle="@yoshua"
            bio="Let’s celeberate our differences! Founder of webelong | 😸 cat dad."
            age="30 yrs old"
            location="NY, US"
          />
          <ProfileCard
            headerImage={require('../../assets/images/heda.png')}
            avatar={require('../../assets/images/rose.png')}
            username="Rosy"
            userhandle="@rosy"
            age="22 yrs old"
            bio="Love good food | Music | Computers | Design | Nature | creator webelong"
            location="NY, US"
          />
          <ProfileCard
            headerImage={require('../../assets/images/horota.jpeg')}
            avatar={require('../../assets/images/horota.jpeg')}
            username="Horota-san"
            // pronounce="(He/They)"
            userhandle="@horota"
            age="30 yrs old"
            location="NY, US"
          />
          <ProfileCard />
          <ProfileCard />
        </HorizontalScroll>
        <HDivider style={{ marginVertical: 20 }} />
        <PostCard />
        <HDivider style={{ marginVertical: 20 }} />
        <TitleSection
          icon={<People set="bold" primaryColor={Colors.AVibrantPurple} />}
          title="Photography"
          link="See All"
        />
        <HorizontalScroll>
          <CommunityCard
            headerImage={require('../../assets/images/photohead.png')}
            avatar={require('../../assets/images/photohead.png')}
            title="Photography"
            desc="Amazing Photos from around the world"
            membercount="2.7k"
            postcount="50"
          />
          <CommunityCard
            title="Photography"
            desc="Amazing Photos from around the world"
            membercount="2.7k"
            postcount="50"
          />
          <CommunityCard
            title="Photography"
            desc="Amazing Photos from around the world"
            membercount="2.7k"
            postcount="50"
          />
        </HorizontalScroll>
      </VerticalScroll>
      <FloatingAction />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.secondaryBlack
  }
})
