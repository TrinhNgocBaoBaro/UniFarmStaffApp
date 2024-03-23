import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";

const dataProduct = [
    {
        id: 1,
        name: "Xoài",
        image: 'https://cdn.tgdd.vn/2020/10/CookProduct/1-1200x676-46.jpg',
        price: '10.000đ',
        quantity: 3,
        type: 'Trái cây'
    },
    {
        id: 2,
        name: "Cam",
        image: 'https://cdn.tgdd.vn/2020/10/CookProduct/1-1200x676-46.jpg',
        price: '10.000đ',
        quantity: 3,
        type: 'Trái cây'
    },
    {
        id: 3,
        name: "Bắp",
        image: 'https://cdn.tgdd.vn/2020/10/CookProduct/1-1200x676-46.jpg',
        price: '10.000đ',
        quantity: 3,
        type: 'Rau củ'
    },


]
const DetailOrder = ({ navigation }) => {
  return (
    <>
      <Header
        title={"Chi tiết đơn hàng"}
        onPress={() => navigation.goBack()}
        rightIcon="ellipsis-vertical"
      />
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/3d-delivery-box-parcel_78370-825.jpg?t=st=1710488199~exp=1710491799~hmac=bb0b92125aa7e596e698e42346747ab817a4d059be7720edfc2038eb86cf9900&w=826",
            }}
            style={{ height: 180, width: 180, borderRadius: 5 }}
            resizeMode="cover"
          />
        </View>
        <View style={{padding: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}> 
                <Text style={{fontWeight: '500', fontSize: 18}}>Mã đơn hàng</Text>
                <Text style={{fontWeight: '500', fontSize: 18}}>232FACS23</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{fontWeight: '500', fontSize: 18}}>Tên người nhận</Text>
                <Text style={{fontWeight: '500', fontSize: 18}}>Nguyễn Lê Hữu</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{fontWeight: '500', fontSize: 18}}>Tổng giá tiền</Text>
                <Text style={{fontWeight: '500', fontSize: 18}}>150.000đ</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{fontWeight: '500', fontSize: 18}}>Địa chỉ</Text>
                <Text style={{fontWeight: '500', fontSize: 18, width: "70%", textAlign: 'right'}}>Bà Rịa - Vũng Tàu</Text>
            </View>
        </View>

        <View style={{padding: 20}}>
            <Text style={{fontWeight: '700', fontSize: 18}}>Danh sách sản phẩm</Text>
            {dataProduct.map((item,index)=>(
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
                      uri: item.image,
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
                      {item.name}
                    </Text>
                    <Text>Loại: {item.type}</Text>
                    <Text>Giá: {item.price}</Text>
                    <Text style={{alignSelf: 'flex-end', fontWeight: '700'}}>x{item.quantity}</Text>

                  </View>
                </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default DetailOrder;

const styles = StyleSheet.create({});
