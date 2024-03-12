import { View, Text, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
            <Button title='Đăng xuất' onPress={()=> navigation.navigate("Login")}/>

    </View>
  )
}

export default Profile