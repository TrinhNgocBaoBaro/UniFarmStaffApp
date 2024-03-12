import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";

const History = ({navigation}) => {
  return (
    <>
      <MainHeader
        iconHeader={"folder-open-outline"}
        navigation={navigation}
      />
      <View>
        <Text>History</Text>
      </View>
    </>
  );
};

export default History;
