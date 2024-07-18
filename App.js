import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./screen/Home";
import UserDetail from "./screen/UserDetail"



const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerTitle: "Ana Sayfa" }} />
      <HomeStack.Screen name="userDetail" component={UserDetail} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Vitrin",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Kategoriler"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Kategoriler",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="İlan Ver"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "İlan Ver",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={40} />
            ),
          }}
        />

        <Tab.Screen
          name="İlanlarım"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "İlanlarım",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Hesabım"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Hesabım",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
