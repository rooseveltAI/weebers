import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { Location } from 'react-native-iconly'
import { AvatarXl, AvatarXs } from '../../components/atoms/Avatar'
import { PrimaryBtn } from '../../components/atoms/Button'
import {
  HeadingSm,
  TextLg,
  TextSm,
  TextXs
} from '../../components/atoms/Typography'
import Colors from '../../constants/Colors'
import { DotSeparator } from '../atoms/Dividers'
import { MediumText } from '../atoms/StyledText'

const ProfileCard = (props: any) => {
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
          <PrimaryBtn>
            <TextLg style={{ color: 'white', opacity: 0.87 }}>
              Add Friend
            </TextLg>
          </PrimaryBtn>
        </View>
        <View style={styles.groupContent}>
          <View style={styles.alignRow}>
            <HeadingSm>{props.username}</HeadingSm>
            <TextXs style={styles.padding4}>{props.pronounce}</TextXs>
          </View>
          <MediumText style={{ fontSize: 12, color: Colors.Color5 }}>
            {props.userhandle}
          </MediumText>

          <View style={{ paddingVertical: 4 }}>
            <TextSm style={{ color: Colors.Color10, fontSize: 15 }}>
              {props.bio}
            </TextSm>
          </View>

          <View style={styles.alignRow}>
            <TextXs style={{ fontSize: 13 }}>{props.age}</TextXs>
            <DotSeparator />
            <View style={styles.alignRow}>
              <Location set="light" size={12} color={Colors.Color5} />
              <TextXs style={{ fontSize: 13 }}>{props.location}</TextXs>
            </View>
          </View>

          {/* <PrimaryBtnUnstyled
            style={{ alignItems: 'flex-start', paddingVertical: 8 }}
          >
            <TextSm>
              <BoldText style={{ color: Colors.Color10 }}>
                {props.postcount}
              </BoldText>{' '}
              Posts
            </TextSm>
          </PrimaryBtnUnstyled> */}
        </View>

        <View style={styles.groupMutual}>
          <View style={styles.alignRow}>
            <AvatarXs
              style={{ borderWidth: 1, borderColor: Colors.secondaryBlack }}
            />
            <AvatarXs
              style={{
                marginLeft: -8,
                borderWidth: 1,
                borderColor: Colors.secondaryBlack
              }}
            />
          </View>
          <TextSm style={styles.padding4}>2 mutual friends</TextSm>
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
    maxWidth: 285
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
    height: 180,
    backgroundColor: Colors.Gray5,
    resizeMode: 'cover',
    borderRadius: 20
  }
})

export default ProfileCard
