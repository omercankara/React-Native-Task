import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";

const banner = require("../assets/banner.png");
const userimg = require("../assets/userimg.png");

export default function UserComponent({navigation}) {
  const userData = useSelector((state) => state.Users.Users);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userCard}
      onPress={() =>
        navigation.navigate("userDetails", {
          userId: item.id,
        })
      }
    >
      <View style={styles.userHeader}>
        <Image source={{ uri: item.avatar }} style={styles.userImage} />
      </View>
      <View style={styles.userName}>
        <Text style={styles.userNameText}>
          {item.first_name} {item.last_name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* SEARCH INPUT SECTION*/}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Marka, ürün adı, kategori arayın"
        />
      </View>

      {/* BANNER SECTION*/}
      <View style={styles.bannerContainer}>
        <Image source={banner} style={styles.bannerImage} />
      </View>

      {/* USER LIST SECTION */}
      <FlatList
        style={styles.userListContainer}
        data={userData[0]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // İki sütun olarak gösterim
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
  },
  searchContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  inputStyle: {
    width: "90%",
    height: 35,
    backgroundColor: "#EBEBED",
    borderRadius: 6,
    paddingLeft: 10,
  },
  bannerContainer: {
    width: "100%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  bannerImage: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  userListContainer: {
    flex: 1,

    marginHorizontal: 10,
  },
  userCard: {
    width: "48%",
    height: 200,
    
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  userHeader: {
    width: "80%",
    height: "80%",
   
    borderRadius:20
  },
  userName: {
    width: "80%",
    height: "10%",
    
  },
  userNameText:{
    color:"black",
    fontWeight:'bold',
    fontSize:15
  },
  userImage:{
    width:'100%',
    height:'100%',
    borderRadius:20
  }
});
