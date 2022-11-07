import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { AvatarSm, AvatarXl } from '../../components/atoms/Avatar'
import {
  PrimaryBtnUnstyled,
  SecondaryBtnOutline
} from '../../components/atoms/Button'
import {
  HeadingSm,
  TextLg,
  TextMd,
  TextSm,
  TextXs
} from '../../components/atoms/Typography'
import Colors from '../../constants/Colors'
import { BoldText } from '../atoms/StyledText'

const CommunityCard = (props: any) => {
  return (
    <View style={styles.container}>
      <View>
        {/* Header Image */}
        <Image
          source={require('../../assets/images/Image.png')}
          style={{ ...styles.image, ...props.style }}
        />
      </View>

      <View style={styles.groupColumn}>
        <View style={styles.headerRow}>
          <AvatarXl />
          <SecondaryBtnOutline>
            <TextLg style={{ color: Colors.Color15, opacity: 0.87 }}>
              View
            </TextLg>
          </SecondaryBtnOutline>
        </View>
        <View style={styles.groupContent}>
          <View style={{}}>
            <HeadingSm>{props.title}</HeadingSm>
          </View>

          <View style={{ paddingVertical: 4 }}>
            <TextSm style={{ color: Colors.Color10, fontSize: 15 }}>
              {props.desc}
            </TextSm>
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
                  {props.membercount}
                </BoldText>{' '}
                Members
              </TextSm>
            </PrimaryBtnUnstyled>

            <PrimaryBtnUnstyled
              style={{ alignItems: 'flex-start', paddingVertical: 8 }}
            >
              <TextSm>
                <BoldText style={{ color: Colors.Color10 }}>
                  {props.postcount}
                </BoldText>{' '}
                Posts/week
              </TextSm>
            </PrimaryBtnUnstyled>
          </View>
        </View>

        <View style={styles.groupFooter}>
          <PrimaryBtnUnstyled
            style={{ alignItems: 'flex-start', paddingVertical: 2 }}
          >
            <View style={styles.alignRow}>
              <AvatarSm />
              <View style={{ alignItems: 'flex-start', paddingHorizontal: 8 }}>
                <TextXs>Community curator</TextXs>
                <TextMd style={{ fontSize: 15 }}>Tracy Kashina</TextMd>
              </View>
            </View>
          </PrimaryBtnUnstyled>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 0.5,
    borderColor: Colors.Gray10,
    borderRadius: 25,
    marginRight: 15,
    maxWidth: 300
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
  groupFooter: {
    // flexDirection: 'row',
    // alignItems: 'center',
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
    height: 180,
    backgroundColor: Colors.Gray5,
    resizeMode: 'cover',
    borderRadius: 20
  }
})

export default CommunityCard
