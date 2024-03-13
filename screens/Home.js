import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";

const Home = ({navigation}) => {
  return (
    <>
      <MainHeader iconHeader={"home-outline"} navigation={navigation} />
      <View>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;
