import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
          onPress={()=> navigation.navigate("Home")}
          activeOpacity={0.7}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 40,
            padding: 10,
            width: 250,
            backgroundColor: "#F5F5F5",
            elevation: 3,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../assets/GoogleLogin.png")}
            style={{ height: 30, width: 30, borderRadius: 50, marginRight: 10 }}
          />
          <Text style={{ fontWeight: 'bold'}}>Đăng nhập với Google</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login