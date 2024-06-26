import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import createAxios from "../utils/axios";
const API = createAxios();
// const dataOrderDone = [
//     {
//         id: 1,
//         go_date: "12/12/2024",
//         done_date: "24/12/2024",
//       },
//       {
//         id: 2,
//         go_date: "12/12/2024",
//         done_date: "24/12/2024",
//       },
//     {
//       id: 3,
//       go_date: "12/12/2024",
//       done_date: "24/12/2024",
//     },
//   ];

const DetailTransfer = ({ navigation, route }) => {

  const transferId = route.params.transferId;
  console.log(transferId)
  const [dataOrder, setDataOrder] = React.useState([]);


  const fetchDataOrderOfTransfer = async ()  => {
    try {
      const response = await API.get(`/orders/${transferId}?pageIndex=0&pageSize=100`)
      if(response) {
        console.log("Success get dataOrder")
        console.log(response.payload)
        setDataOrder(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(()=>{
    if(transferId) fetchDataOrderOfTransfer();
  },[transferId])

  return (
    <>
      <Header
        title={"Thông tin vận chuyển"}
        onPress={() => navigation.goBack()}
        rightIcon="ellipsis-vertical"
      />
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-132.jpg?t=st=1710403441~exp=1710407041~hmac=6a319d5099d8eeab4dce39eb37575f989979255e0d6e377d0946b54238723d10&w=1380",
            }}
            style={{ height: 180, width: 180, borderRadius: 5 }}
            resizeMode="cover"
          />
          <Text style={{marginTop: 20,  marginBottom: 20, fontSize: 18, fontWeight: 'bold', color: '#00B2FF'}}>Đang vận chuyển</Text>
   
        </View>
        <View style={{padding: 20}}>
        <View
            style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}
          >
            <Text style={styles.textTitle}>Thời gian tạo</Text>
            <Text style={styles.textInfo}>11:59, 21/03/2024</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}
          >
            <Text style={styles.textTitle}>Người tạo</Text>
            <Text style={styles.textInfo}>Nguyễn Lê Hữu</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}
          >
            <Text style={styles.textTitle}>Ghi chú gửi</Text>
            <Text style={styles.textInfo}>Gửi hàng từ về station</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}
          >
            <Text style={styles.textTitle}>Ngày nhận</Text>
            <Text style={styles.textInfo}>11:59, 30/03/2024</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}
          >
            <Text style={styles.textTitle}>Ghi chú nhận</Text>
            <Text style={styles.textInfo}>Đã nhận đủ hàng</Text>
          </View>
          </View>

          <View style={{justifyContent: 'center', marginBottom: 20, backgroundColor: 'white'}}>
            <View style={{alignItems: 'center'}}>
            <Icon name="warehouse" size={80} color={'grey'}/>
                <Text style={[styles.textTitle, {textAlign: 'center'}]}>Kho tổng Vinhomes Grand Park</Text>
             </View>   
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 0, backgroundColor: 'white'}}>
            <Icon name="power-on" size={80} color={'#d5d5d5'}/>
          </View>

          <View style={{justifyContent: 'center',paddingHorizontal: 20, marginBottom: 0, backgroundColor: 'white'}}>
            <View style={{alignItems: 'center'}}>
            <Icon name="store-marker-outline" size={80} color={'grey'}/>
                <Text style={[styles.textTitle, {textAlign: 'center'}]}>Trạm Vinhomes Grand Park Masterise</Text>
             </View>   
          </View>
          <View style={{padding: 20, marginVertical: 10}}>
            <Text style={{fontSize: 18, fontWeight: "600"}}>Đơn hàng</Text>
            {dataOrder.map((item, index)=>(
                   <TouchableOpacity
                   key={index}
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
                       uri: "https://img.freepik.com/free-vector/3d-delivery-box-parcel_78370-825.jpg?t=st=1710488199~exp=1710491799~hmac=bb0b92125aa7e596e698e42346747ab817a4d059be7720edfc2038eb86cf9900&w=826",
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
                       justifyContent: 'space-between'
                     }}
                   >
                     <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                       Mã đơn hàng: {item.code}
                     </Text>
                     <Text style={{ }}>
                       KH: {item.customerResponse.firstName} {item.customerResponse.lastName} 
                     </Text>
                     <Text style={{alignSelf: 'flex-end', fontWeight: "bold" }}>{item.totalAmount} đ</Text>
                   </View>
                 </TouchableOpacity>
            ))}
          </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: 'grey'
    },
    textInfo: {
        fontSize: 16,
        fontWeight: "500",
        width: "70%", 
        textAlign: 'right'
    }
});

export default DetailTransfer;
