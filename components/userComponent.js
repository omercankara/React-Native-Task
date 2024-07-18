import { StyleSheet, Text, View, TextInput,Image } from "react-native";
import React from "react";
const banner = require("../assets/banner.png");
export default function UserComponent({ userData }) {
  return (
    <View style={styles.itemContainer}>
      {/* SEARCH İNPUT SECTİON*/}
      <View style={styles.searchContainer}>
        <View style={styles.searchİnput}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Marka,ürün adı, kategori arayın"
          ></TextInput>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <View style={styles.bannerImages}>
          <Image source={banner} style={styles.bannerImage} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 1000,
    
    display: "flex",
    flexDirection: "column",
  },
  searchContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
  },
  searchİnput: {
    width: "90%",
    height: 35,
    backgroundColor: "#EBEBED",
    borderRadius: 6,
  },
  inputStyle: {
    backgroundColor: "#EBEBED",
    height: "100%",
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 10,
  },

  bannerContainer: {
    display:"flex",
    flexDirection:"row",
    justifyContent: 'center',
    width: "100%",
  },
  bannerImages: {
    width: "90%",
    height:110,
    justifyContent:"center",
    alignItems:"center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", 
  },
});
