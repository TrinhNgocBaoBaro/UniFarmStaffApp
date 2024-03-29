import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ButtonFlex } from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createAxios from "../utils/axios";
const API = createAxios();
const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [focusMail, setFocusMail] = React.useState(false);
  const [focusPassword, setFocusPassword] = React.useState(false);
  const [noti,setNoti]= React.useState();

  React.useEffect(()=>{
    console.log("Email: ", email)
  },[email])


  const handleLogin = async () => {
    if (email === "" || password === "") {
      setNoti("Vui lòng nhập tài khoản hoặc mật khẩu!");
      return;
    }

    try {
      const response = await API.post(
        `auth/login`,
        {
          "email": email,
          "password": password
        }
      );
      if (response.token) {
        console.log(response.token)
        console.log("Success")
        AsyncStorage.setItem(
          "UserToken",
          JSON.stringify({ userToken: response.token})
        )
          .then(() => {
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.log(error);
          });
        setNoti();
      }
    } catch (error) {
      console.log(error);
      setNoti("Sai tên tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/main-logo.png")}
        style={{ width: 80, height: 80, marginRight: 5 }}
      />
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 50, fontWeight: "bold" }}>UniFarm</Text>
      </View>
      <TextInput
        style={{
          justifyContent: "center",
          padding: 20,
          height: 60,
          width: "80%",
          backgroundColor: "white",
          marginTop: 20,
          marginBottom: 0,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: focusMail === true ? "#16A80A" : "#d9d9d9",
          fontWeight: "bold",
          elevation: 3,
        }}
        placeholder="Email"
        onChangeText={(newTextPhone) => setEmail(newTextPhone)}
        onFocus={() => setFocusMail(!focusMail)}
        onBlur={() => setFocusMail(!focusMail)}
      />
      <TextInput
        style={{
          justifyContent: "center",
          padding: 20,
          height: 60,
          width: "80%",
          backgroundColor: "white",
          marginTop: 20,
          marginBottom: 0,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: focusPassword === true ? "#16A80A" : "#d9d9d9",
          fontWeight: "bold",
          elevation: 3,
        }}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(newTextPassword) => setPassword(newTextPassword)}
        onFocus={() => setFocusPassword(!focusPassword)}
        onBlur={() => setFocusPassword(!focusPassword)}
      />
      <Text
        style={{
          fontWeight: 500,
          fontSize: 12,
          color: "#16A80A",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Quên mật khẩu?
      </Text>
      <ButtonFlex
          title="Đăng nhập"
          onPress={handleLogin}
          stylesButton={{
            borderRadius: 20,
            paddingHorizontal: 30,
            paddingVertical: 10,
            marginBottom: 20,
            elevation: 5,
          }}
          stylesText={{ fontSize: 16 }}
        />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
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
        <Text style={{ fontWeight: "bold" }}>Đăng nhập với Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
