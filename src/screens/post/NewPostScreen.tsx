import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { v4 as uuidv4 } from 'uuid'

import { Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import {
  ArrowLeft,
  Camera,
  ChevronLeft,
  Danger,
  Image2,
  TickSquare,
  Video
} from 'react-native-iconly'
import {
  BoldText,
  MediumText,
  RegularText
} from '../../components/atoms/StyledText'
import { PrimaryBtnUnstyled } from '../../components/atoms/Button'
import {
  IconButtonOutline,
  IconButtonUnstyled
} from '../../components/atoms/IconButton'
import { HeaderSecondary } from '../../components/molecules/Header'
import { HDivider } from '../../components/atoms/Dividers'
import { AvatarMd } from '../../components/atoms/Avatar'

export default function CreatePostScreen() {
  const [post, setPost] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const navigation = useNavigation()

  const getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    }
  }

  useEffect(() => {
    getPermissionAsync()
  }, [])

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
      if (!result.cancelled) {
        setImageUrl(result.uri)
      }

      console.log(result)
    } catch (E) {
      console.log(E)
    }
  }

  const uploadImage = async () => {
    try {
      const response = await fetch(imageUrl)

      const blob = await response.blob()

      const urlParts = imageUrl.split('.')
      const extension = urlParts[urlParts.length - 1]

      const key = `${uuidv4()}.${extension}`

      // await Storage.put(key, blob);

      return key
    } catch (e) {
      console.log(e)
    }
    return ''
  }

  const onPost = async () => {
    let image
    if (!!imageUrl) {
      image = await uploadImage()
    }

    try {
      // const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

      const newTweet = {
        content: post,
        image
        // userID: currentUser.attributes.sub,
      }
      // await API.graphql(graphqlOperation(createTweet, { input: newTweet }));
      navigation.goBack()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSecondary
        leftComponent={
          <IconButtonUnstyled onPress={() => navigation.goBack()}>
            <ChevronLeft size={28} primaryColor={Colors.Color15} />
          </IconButtonUnstyled>
        }
        centerComponent={
          <MediumText style={{ fontSize: 17, textAlign: 'center' }}>
            New Post
          </MediumText>
        }
        rightComponent={
          <PrimaryBtnUnstyled>
            <BoldText style={{ fontSize: 16, color: Colors.primarySpringBud }}>
              Share
            </BoldText>
          </PrimaryBtnUnstyled>
        }
      />

      <View style={styles.newPostContainer}>
        <View style={{ paddingTop: 16, paddingHorizontal: 10 }}>
          <AvatarMd />
        </View>
        <View style={styles.formContainer}>
          {/* <View > */}
          <ScrollView
            style={styles.headerContainer}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <TextInput
              value={post}
              onChangeText={(value) => setPost(value)}
              multiline={true}
              numberOfLines={3}
              style={styles.textInput}
              placeholder={'Share with the community...'}
              placeholderTextColor={Colors.Color5}
            />
          </ScrollView>
          {/* </View> */}
          <TouchableOpacity onPress={pickImage}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <View style={{ paddingVertical: 16 }}>
              <RegularText
                style={{
                  color: Colors.Color5,
                  opacity: 0.6,
                  fontSize: 13,
                  lineHeight: 18
                }}
              >
                webelong is a safe space. We will delete any content that
                promotes violence, racism, or sexual harassment.
                {/* {'\n'}Be kind to yourself and others. */}
              </RegularText>
            </View>

            {/* <HDivider /> */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 4,
                paddingVertical: 16
              }}
            >
              <TickSquare color={Colors.Color10} size={24} />
              <RegularText style={{ paddingHorizontal: 8, flex: 1 }}>
                Trigger Warning
              </RegularText>
              <Danger set="curved" color={Colors.Color10} />
            </View>
            <HDivider />
            <View style={{ flexDirection: 'row' }}>
              <IconButtonOutline onPress={pickImage}>
                <Image2 color={Colors.Color10} size={28} />
              </IconButtonOutline>
              <IconButtonOutline
                style={{ marginHorizontal: 12 }}
                onPress={pickImage}
              >
                <Camera color={Colors.Color10} size={28} />
              </IconButtonOutline>
              <IconButtonOutline onPress={pickImage}>
                <Video color={Colors.Color10} size={28} />
              </IconButtonOutline>
            </View>
            <HDivider />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryBlack
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },

  newPostContainer: {
    width: '100%'
  },

  headerContainer: {
    paddingHorizontal: 12,
    paddingBottom: 16
  },
  formContainer: {
    marginVertical: 10
  },
  textInput: {
    // height: 100,
    // maxHeight: 150,
    fontSize: 16,
    color: Colors.Color15
  },

  image: {
    width: Dimensions.get('window').width,
    height: 280,
    backgroundColor: Colors.Gray5,
    resizeMode: 'cover'
    // borderRadius:
  },

  footerContainer: {
    paddingHorizontal: 12,
    paddingBottom: 16
  }
})
