import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const logo = require("../assets/logo.png");
const bell = require("../assets/bell.png");
const heart = require("../assets/heart.png");
const msg = require("../assets/msg.png");

export default function HeaderComponent() {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.content}>
        <View style={styles.Logo}>
          <Image source={logo} style={styles.logoimg}></Image>
        </View>

        <View style={styles.İcon}>
          <Image source={bell} style={{bottom:3,right:4}}></Image>
          <Image source={heart} style={styles.İconimg}></Image>
          <Image source={msg} style={styles.İconimg}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    height: 100,
    display: "flex",
    alignItems:"center",
  },
  content: {
    width: "100%",
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    
  },
  Logo: {
    display: "flex",
    alignItems:"center",
    justifyContent: "flex-end",
    width: "70%",
    height:95,
    
  },
  logoimg: {
    width: "90%",
    height:40,
    margin:0,
    padding:0
  },
  İcon: {
    display:"flex",
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent: "center",
    width: "30%",
    height:'100%'
  },
  İconimg: {
    width: "25%",
    margin:0,
    padding:0
  },
});
