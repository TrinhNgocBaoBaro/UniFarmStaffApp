import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { GestureHandlerRootView } from "react-native-gesture-handler";


import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import OrderScreen from './screens/Order'
import HistoryScreen from './screens/History';
import ProfileScreen from './screens/Profile';

const TabRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#16A80A",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
        }
      }}>
        <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Icon name={focused ? `home`:`home-outline` } color={color} size={25} />;
          },
          headerShown: false,
        }} />
      <Tab.Screen
        name="Đơn hàng"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Icon name={focused ? `document-text`:`document-text-outline` } color={color} size={25} />;
          },
          headerShown: false,
        }} />
      <Tab.Screen
        name="Lịch sử"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? <Icon name="folder-open" color={color} size={30} />
            : <Icon name="folder-open-outline" color={color} size={28} />;
          },
          headerShown: false,

        }} />
      <Tab.Screen
        name="Tài khoản"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? <Icon name="person" color={color} size={30} />
            : <Icon name="person-outline" color={color} size={28} />;
          },
          headerShown: false,
        }} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabRoute} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />

    </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
