import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { ButtonFlex } from "../components/Button";
import Icon from "react-native-vector-icons/Ionicons";

const dataTransfer = [
  {
    id: 1,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
  },
  {
    id: 2,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
  },
  {
    id: 3,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
  },
];

const dataTransferDone = [

];

const dataAll = [
  {
    id: 1,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
    status: 'none'
  },
  {
    id: 2,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
    status: 'Received'
  },
  {
    id: 3,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
    status: 'none'
  },
  {
    id: 4,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
    status: 'notReceived'

  },
  {
    id: 5,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
    status: 'Received'
  },
  {
    id: 6,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
    status: 'none'
  },
  {
    id: 7,
    go_date: "12/12/2024",
    done_date: "24/12/2024",
    status: 'none'
  },

];

const Transfer = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const status = {
      Received: 
      {
        name: "Đã đến",
        color: '#32b768'
      },
      notReceived: 
      {
        name: 'Đã hủy',
        color: "red"
      },
      none: 
      {
        name: 'Đang vận chuyển',
        color: "#00B2FF"
      },
  }
  return (
    <>
      <MainHeader iconHeader={"file-tray-outline"} navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <SegmentedControl
            values={["Tất cả","Chưa xác nhận", "Đã xác nhận"]}
            selectedIndex={selectedIndex}
            fontStyle={{ fontWeight: 500 }}
            onChange={(e) => {
              setSelectedIndex(e.nativeEvent.selectedSegmentIndex);
            }}
          />
        </View>
        {selectedIndex === 0 && (dataAll.length > 0 ? (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
              data={dataAll}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    marginHorizontal: 20,
                    marginTop: 10,
                    marginBottom: 5,
                    borderRadius: 10,
                    elevation: 2,
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "transparent",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-132.jpg?t=st=1710403441~exp=1710407041~hmac=6a319d5099d8eeab4dce39eb37575f989979255e0d6e377d0946b54238723d10&w=1380",
                    }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      marginLeft: 25,
                      borderWidth: 0,
                      borderColor: "red",
                      flex: 1,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                      Mã vận chuyển: TF234AF45
                    </Text>
                    <Text>Ngày dự kiến: ...10/10/2023</Text>
                    <Text style={{ marginTop: 10, color: status[item.status].color, fontWeight: '700'}}> {status[item.status].name}</Text>

                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 80}}>
            <Icon name={"file-tray-stacked"} size={70} color={"#d5d5d5"} />
          <Text style={{fontSize: 15, fontWeight: 500, color: "grey", marginTop: 15}}>Không có vận chuyển..</Text>
          </View>
        ))}
        {selectedIndex === 1 && (dataTransfer.length > 0 ? (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
              data={dataTransfer}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={()=> navigation.navigate("DetailTransfer")}
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    marginHorizontal: 20,
                    marginTop: 10,
                    marginBottom: 5,
                    borderRadius: 10,
                    elevation: 2,
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "transparent",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-132.jpg?t=st=1710403441~exp=1710407041~hmac=6a319d5099d8eeab4dce39eb37575f989979255e0d6e377d0946b54238723d10&w=1380",
                    }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      borderWidth: 0,
                      borderColor: "red",
                      flex: 1,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      Mã vận chuyển: TF234AF45
                    </Text>
                    <Text>Ngày bắt đầu: 10/10/2023</Text>
                    <Text>Ngày dự kiến: ...10/10/2023</Text>
                    <View style={{ alignSelf: "flex-end", marginTop: 10 }}>
                      <ButtonFlex
                        title="Xác nhận"
                        stylesButton={{
                          paddingHorizontal: 24,
                          paddingVertical: 10,
                        }}
                        stylesText={{ fontWeight: "bold", fontSize: 12 }}
                        onPress={()=> {
                          Alert.alert(
                            "Xác nhận",
                            `Các đơn hàng đã được vận chuyển đến ?`,
                            [
                              {
                                text: 'Hủy',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ]
                            )
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 80}}>
          <Icon name={"file-tray-stacked"} size={70} color={"grey"} />
        <Text style={{fontSize: 15, fontWeight: 500, color: "grey", marginTop: 15}}>Không có vận chuyển..</Text>
        </View>
        ))}
        {selectedIndex === 2 && (dataTransferDone.length > 0 ? (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
              data={dataTransferDone}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    marginHorizontal: 20,
                    marginTop: 10,
                    marginBottom: 5,
                    borderRadius: 10,
                    elevation: 2,
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "transparent",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-132.jpg?t=st=1710403441~exp=1710407041~hmac=6a319d5099d8eeab4dce39eb37575f989979255e0d6e377d0946b54238723d10&w=1380",
                    }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      borderWidth: 0,
                      borderColor: "red",
                      flex: 1,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      Mã vận chuyển: TF234AF45
                    </Text>
                    <Text>Ngày bắt đầu: 10/10/2023</Text>
                    <Text>Ngày dự kiến: ...10/10/2023</Text>
  
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 80}}>
            <Icon name={"file-tray-stacked"} size={70} color={"#d5d5d5"} />
          <Text style={{fontSize: 15, fontWeight: 500, color: "grey", marginTop: 15}}>Không có vận chuyển..</Text>
          </View>
        ))}
        
      </View>
    </>
  );
};

export default Transfer;
