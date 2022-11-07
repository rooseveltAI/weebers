import { useNavigation } from '@react-navigation/native'
import {
  HeadingLg,
  HeadingMd,
  HeadingSm,
  TextLg,
  TextSm,
  TextXs
} from '../../components/atoms/Typography'
import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, Dimensions } from 'react-native'

import {
  ChevronLeft,
  Location,
  Lock,
  Message,
  Show,
  Star
} from 'react-native-iconly'
import {
  PrimaryBtn,
  PrimaryBtnUnstyled,
  SecondaryBtnOutline
} from '../../components/atoms/Button'
import { IconButtonUnstyled } from '../../components/atoms/IconButton'
import { BoldText, MediumText } from '../../components/atoms/StyledText'
import { HeaderSecondary, HeaderStack } from '../../components/molecules/Header'
import Colors from '../../constants/Colors'
import {
  IconMore,
  IconMore24,
  IconShare,
  IconShare24
} from '../../assets/icons'
import { AvatarSm, AvatarXl, AvatarXs } from '../../components/atoms/Avatar'
import { DotSeparator, HDivider } from '../../components/atoms/Dividers'
import {
  HorizontalScroll,
  VerticalScroll
} from '../../components/templates/ScrollViews'
import { Tag } from '../../components/atoms/TagsButton'
import PostCard from '../../components/organisms/PostCard'

export default function UserProfilePage(props: any) {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSecondary
        leftComponent={
          <IconButtonUnstyled onPress={() => navigation.goBack()}>
            <ChevronLeft size={28} primaryColor={Colors.Color15} />
          </IconButtonUnstyled>
        }
        rightComponent={
          <PrimaryBtnUnstyled>
            <IconMore24 />
          </PrimaryBtnUnstyled>
        }
      />

      <VerticalScroll>
        <View style={styles.cardContainer}>
          <View>
            {/* Header Image */}
            <Image
              source={require('../../assets/images/head_yosh.png')}
              style={{ ...styles.image, ...props.style }}
            />
          </View>

          <View style={styles.groupColumn}>
            <View style={styles.headerRow}>
              <AvatarXl source={require('../../assets/images/yosh.png')} />
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '50%'
                }}
              >
                <IconButtonUnstyled>
                  <IconShare24 />
                </IconButtonUnstyled>
                <IconButtonUnstyled>
                  <Message
                    set="light"
                    stroke="bold"
                    size={20}
                    color={Colors.Color15}
                  />
                </IconButtonUnstyled>
                <PrimaryBtn>
                  <TextLg style={{ color: 'white', opacity: 0.87 }}>
                    Add Friend
                  </TextLg>
                </PrimaryBtn>
              </View>
            </View>
            <View style={styles.groupContent}>
              <View style={styles.alignRow}>
                <HeadingSm>Yoshua</HeadingSm>
                <TextXs style={styles.padding4}>{props.pronounce}</TextXs>
              </View>
              <MediumText style={{ fontSize: 12, color: Colors.Color5 }}>
                @yoshua
              </MediumText>

              <View style={{ paddingVertical: 4 }}>
                <TextSm style={{ color: Colors.Color10, fontSize: 15 }}>
                  Let’s celeberate our differences! Founder of webelong | 😸 cat
                  dad.
                </TextSm>
              </View>

              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ flex: 1 }}>
                  <View style={styles.alignRow}>
                    <TextXs style={{ fontSize: 13 }}>30 yrs old</TextXs>
                    <DotSeparator />
                    <View style={styles.alignRow}>
                      <Location set="light" size={12} color={Colors.Color5} />
                      <TextXs style={{ fontSize: 13 }}>NY, US</TextXs>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <PrimaryBtnUnstyled
                      style={{
                        alignItems: 'flex-start',
                        paddingVertical: 8,
                        marginRight: 8
                      }}
                    >
                      <TextSm>
                        <BoldText style={{ color: Colors.Color10 }}>
                          1.2k
                        </BoldText>{' '}
                        Posts
                      </TextSm>
                    </PrimaryBtnUnstyled>

                    <PrimaryBtnUnstyled
                      style={{
                        paddingVertical: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 8
                      }}
                    >
                      <Star color={Colors.Color5} size={16} />

                      <TextSm
                        style={{
                          paddingLeft: 4
                        }}
                      >
                        <BoldText style={{ color: Colors.Color10 }}>5</BoldText>{' '}
                        Traits
                      </TextSm>
                    </PrimaryBtnUnstyled>

                    <PrimaryBtnUnstyled
                      style={{
                        paddingVertical: 8,
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}
                    >
                      <Show color={Colors.Color5} size={16} />
                      <TextSm
                        style={{
                          paddingLeft: 4
                        }}
                      >
                        <BoldText
                          style={{
                            color: Colors.Color10,
                            paddingLeft: 8
                          }}
                        >
                          8{' '}
                        </BoldText>
                        Interests
                      </TextSm>
                    </PrimaryBtnUnstyled>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <HDivider />
        {/* <PostCard /> */}
      </VerticalScroll>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryBlack
  },

  tag: {
    marginRight: 8
  },

  tagText: {
    paddingHorizontal: 8
  },

  cardContainer: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 2
  },
  groupColumn: {
    marginTop: -40,
    paddingHorizontal: 8,
    flex: 1
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 4
  },
  groupContent: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    flex: 1
  },
  groupMutual: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  padding4: {
    paddingHorizontal: 4
  },

  image: {
    width: Dimensions.get('window').width,
    maxWidth: '100%',
    height: 150,
    backgroundColor: Colors.Gray5,
    resizeMode: 'cover',
    borderRadius: 10
  }
})
