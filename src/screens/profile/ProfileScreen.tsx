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

import { ChevronLeft, Location, Lock, Star } from 'react-native-iconly'
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

export default function ProfileScreen(props: any) {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <HeaderStack
        leftComponent={<HeadingMd>@rose</HeadingMd>}
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
              source={require('../../assets/images/6827.png')}
              style={{ ...styles.image, ...props.style }}
            />
          </View>

          <View style={styles.groupColumn}>
            <View style={styles.headerRow}>
              <AvatarXl source={require('../../assets/images/user-img.jpg')} />
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '50%'
                }}
              >
                <IconButtonUnstyled>
                  <Lock set="bold" size={20} color={Colors.Color15} />
                </IconButtonUnstyled>
                <IconButtonUnstyled>
                  <IconShare24 />
                </IconButtonUnstyled>
                <SecondaryBtnOutline>
                  <TextLg style={{ color: Colors.Color15, opacity: 0.87 }}>
                    Edit Profile
                  </TextLg>
                </SecondaryBtnOutline>
              </View>
            </View>
            <View style={styles.groupContent}>
              <View style={styles.alignRow}>
                <HeadingSm>Roosevelt</HeadingSm>
                <TextXs style={styles.padding4}>{props.pronounce}</TextXs>
              </View>
              <MediumText style={{ fontSize: 12, color: Colors.Color5 }}>
                @rose
              </MediumText>

              <View style={{ paddingVertical: 4 }}>
                <TextSm style={{ color: Colors.Color10, fontSize: 15 }}>
                  Love good food | Music | Computers | Design | Nature | creator
                  webelong
                </TextSm>
              </View>

              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ flex: 1 }}>
                  <View style={styles.alignRow}>
                    <TextXs style={{ fontSize: 13 }}>22 yrs old</TextXs>
                    <DotSeparator />
                    <View style={styles.alignRow}>
                      <Location set="light" size={12} color={Colors.Color5} />
                      <TextXs style={{ fontSize: 13 }}>Lagos, Nigeria</TextXs>
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
                          293
                        </BoldText>{' '}
                        Followers
                      </TextSm>
                    </PrimaryBtnUnstyled>

                    <PrimaryBtnUnstyled
                      style={{
                        alignItems: 'flex-start',
                        paddingVertical: 8,
                        marginRight: 8
                      }}
                    >
                      <TextSm>
                        <BoldText style={{ color: Colors.Color10 }}>
                          29
                        </BoldText>{' '}
                        Friends
                      </TextSm>
                    </PrimaryBtnUnstyled>

                    <PrimaryBtnUnstyled
                      style={{ alignItems: 'flex-start', paddingVertical: 8 }}
                    >
                      <TextSm>
                        <BoldText style={{ color: Colors.Color10 }}>
                          19
                        </BoldText>
                        Visitors
                      </TextSm>
                    </PrimaryBtnUnstyled>
                  </View>
                </View>

                <PrimaryBtnUnstyled
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 8
                  }}
                >
                  <View
                    style={{
                      borderRadius: 980,
                      width: 40,
                      height: 40,
                      backgroundColor: Colors.ADimYellow,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Star set="bold" size={20} color={Colors.AVibrantYellow} />
                  </View>
                  <View
                    style={{
                      backgroundColor: '#292200',
                      marginTop: -10,
                      borderRadius: 980,
                      borderWidth: 2,
                      borderColor: Colors.secondaryBlack
                    }}
                  >
                    <BoldText
                      style={{
                        color: Colors.AVibrantYellow,
                        fontSize: 10,
                        paddingHorizontal: 8,
                        paddingVertical: 4
                      }}
                    >
                      5 Traits
                    </BoldText>
                  </View>
                </PrimaryBtnUnstyled>
              </View>
            </View>
          </View>
        </View>
        <HDivider />
        <PostCard />
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
