import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const logo = require("./assets/logo.png");
const bell = require("./assets/bell.png");
const heart = require("./assets/heart.png");
const msg = require("./assets/msg.png");

import Home from "./screen/Home";
import UserDetail from "./screen/UserDetail";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HeaderLogo = () => (
  <View style={styles.headerLogoContainer}>
    <Image source={logo} style={styles.headerLogo} />
  </View>
);

const HeaderRight = () => (
  <View style={styles.headerRightContainer}>
    <Image source={msg} style={styles.headerRightIcon} />
    <Image source={heart} style={styles.headerRightIcon} />
    <Image source={bell} style={styles.bellIcon} />
  </View>
);

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <HeaderLogo {...props} />,
          headerRight: () => <HeaderRight />, 
        }}
      />
      <HomeStack.Screen
        name="userDetail"
        component={UserDetail}
        options={{
          headerTitle: (props) => <HeaderLogo {...props} />,
          headerRight: () => <HeaderRight />, 
        }}
      />
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
  headerRightContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightIcon: {
    resizeMode: "contain",
    height: 50,
    width: 40,
  },
  bellIcon: {
    marginTop: 5,
  },
});
