import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
const banner = require("../assets/banner.png");
const userimg = require("../assets/userimg.png");

export default function UserComponent({ userData }) {

  useEffect(() => {
    console.log(userData)
  },[])


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

      {/* BANNER SECTİON*/}
      <View style={styles.bannerContainer}>
        <View style={styles.bannerImages}>
          <Image source={banner} style={styles.bannerImage} />
        </View>
      </View>

      {/* <View style={styles.userListContainer}>
        {userData.map((item, index) => (
          <View key={index} style={styles.userCard}>
            <View style={styles.userHeader}>
              <Image source={userimg} style={styles.userImage} />
            </View>
            <View style={styles.userName}>
              <Text>{item.email}</Text>
            </View>
          </View>
        ))}
      </View> */}
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
    marginBottom: 10,
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  bannerImages: {
    width: "90%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  userListContainer: {
    width: "100%",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    width: "95%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "blue",
  },
  userCard: {
    width: "48%",
    height: 200,
    backgroundColor: "gray",
    marginVertical: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  userHeader: {
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  userName: {
    width: "80%",
    height: "10%",
    backgroundColor: "red",
  },
});
