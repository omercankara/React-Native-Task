import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider } from "react-redux";

import { store } from "./store/redux/store";

const logo = require("./assets/logo.png");
const bell = require("./assets/bell.png");
const heart = require("./assets/heart.png");
const msg = require("./assets/msg.png");


const homeimg = require("./assets/hme.png");
const categoryimg = require("./assets/kategor.png");
const ilanver = require("./assets/t.png");
const ilanlarimimg = require("./assets/ilan.png");
const hesap = require("./assets/hsp.png");


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
    <Provider store={store}>
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
          name="userDetails"
          component={UserDetail}
          options={{
            headerTitle: (props) => <HeaderLogo {...props} />,
            headerRight: () => <HeaderRight />,

          }}
        />
      </HomeStack.Navigator>
    </Provider>
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
              <Image
                source={homeimg}
                style={{ tintColor: "purple", right:10, width: 90, height: 50, top:-25 }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Kategoriler"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Vitrin",
            tabBarIcon: ({ color }) => (
              <Image
                source={categoryimg}
                style={{ tintColor: "purple", left:0, width: 90, height: 40, top:-10}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="İlan Ver"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Vitrin",
            tabBarIcon: ({ color }) => (
              <Image
                source={ilanver}
                style={{ tintColor: "purple", left:15, width: 90, height: 80, bottom:30 }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="İlanlarım"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Vitrin",
            tabBarIcon: ({ color }) => (
              <Image
                source={ilanlarimimg}
                style={{ tintColor: "purple", left:0, width: 90, height: 50, bottom:10}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Hesabım"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Vitrin",
            tabBarIcon: ({ color }) => (
              <Image
                source={hesap}
                style={{ tintColor: "purple", left:0, width: 90, height: 50, bottom:10}}
              />
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
