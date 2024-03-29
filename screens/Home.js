import { View, Text, FlatList } from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";

const dataDashboard = [
  {
    id: 1,
    name: "Tổng đơn hàng",
    quantity: "100",
    color: 'red'
  },
  {
    id: 2,
    name: "Vận chuyển",
    quantity: "11",
    color: 'orange'
  },
  {
    id: 3,
    name: "Khách hàng",
    quantity: "32",
    color: 'blue'
  },
  {
    id: 4,
    name: "Khác",
    quantity: "100",
    color: '#32b768'
  },
];

const Home = ({ navigation }) => {
  return (
    <>
      <MainHeader iconHeader={"home-outline"} navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={dataDashboard}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: 150,
                backgroundColor: item.color,
                marginHorizontal: 15,
                marginVertical: 10,
                flex: 1,
                flexDirection: "column",
                padding: 20,
                borderRadius: 10
              }}
            >
              <Text style={{ color: "white", fontWeight: 'bold', fontSize: 17 }}>{item.name}</Text>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default Home;
