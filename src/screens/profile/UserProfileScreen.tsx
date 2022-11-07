import UserProfilePage from '../../components/pages/UserProfilePage'
import { StyleSheet } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'

export default function UserProfileScreen() {
  return (
    <View style={styles.container}>
      <UserProfilePage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
