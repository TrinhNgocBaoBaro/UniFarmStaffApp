import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";
const Order = () => {
  return (
    <>
      <MainHeader
        iconHeader={"document-text-outline"}
      />
      <View>
        <Text>Order</Text>
      </View>
    </>
  );
};

export default Order;
