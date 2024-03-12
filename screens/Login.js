import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Button title='Đăng nhập' onPress={()=> navigation.navigate("Home")}/>
    </View>
  )
}

export default Login