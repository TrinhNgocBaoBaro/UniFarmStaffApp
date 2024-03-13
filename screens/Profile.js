import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  StatusBar
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Profile = ({ navigation }) => {
  const cacheAndCellularItems = [
    {
      icon: "person-circle-outline",
      text: "Cài đặt tài khoản",
      sub: "create-outline",
    },
  ];
  const accountItems = [
    {
      icon: "language-outline",
      text: "Ngôn ngữ",
      sub: "chevron-forward-outline",
    },
    {
      icon: "chatbubble-ellipses-outline",
      text: "Phản hồi",
      sub: "chevron-forward-outline",
    },
    {
      icon: "star-outline",
      text: "Đánh giá ứng dụng",
      sub: "chevron-forward-outline",
    },
    {
      icon: "download-outline",
      text: "Cập nhật",
      sub: "chevron-forward-outline",
    },
  ];

  const renderSettingsItem = ({ icon, text, sub }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: "white",
      }}
    >
      <Icon name={icon} size={24} color="grey" />
      <Text
        style={{
          marginLeft: 15,
          fontSize: 15,
          minWidth: 200,
          fontWeight: 500,
        }}
      >
        {text}
      </Text>
      <Icon
        name={sub}
        size={24}
        color="grey"
        style={{
          marginLeft: 70,
          fontWeight: 600,
          fontSize: 24,
        }}
      />
    </TouchableOpacity>
  );
  return (
    <>
      <View style={styles.top}>
        <Pressable onPress={()=> navigation.goBack()}>
        <View style={{ height: 40, width: 40, marginLeft: 20, justifyContent: 'center' }}>
          <Icon name="chevron-back-outline" size={30} color={"black"} />
        </View>
        </Pressable>
        <View style={{ justifyContent: 'center' }}> 
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Tài khoản</Text>
        </View>
        <View style={{ marginRight: 20, height: 40, width: 40, justifyContent: 'center' }}>
          <Icon name="person-outline" size={30} color={"black"} />
        </View>
      </View>
      <View style={styles.itemCard}>
        <Image
          source={{
            uri: "https://banner2.cleanpng.com/20180619/epr/kisspng-avatar-photo-booth-computer-icons-email-stewardess-5b292bfebc29e1.5698032815294248947707.jpg",
          }}
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
        <View
          style={{
            height: 100,
            marginLeft: 25,
            paddingVertical: 32,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, fontWeight: 500 }}>
            Nguyễn Lê Hữu
          </Text>
          <Text style={{ fontSize: 13, color: "grey", fontWeight: 500 }}>
            stationStaff01@gmail.com
          </Text>
        </View>
        <View>
          <Icon name="notifications-outline" size={28} color={"grey"} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  itemCard: {
    height: 80,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    fontWeight: 500,
  },
  btnContainer: {
    backgroundColor: "red",
    height: 35,
    width: 130,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  top: {
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 80
  },
});

export default Profile;
