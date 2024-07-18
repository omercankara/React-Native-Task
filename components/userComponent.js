import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const banner = require("../assets/banner.png");

export default function userComponent({ navigation }) {
  const userData = useSelector((state) => state.Users.Users);
  const [searchText, setSearchText] = useState("");

  const handleChange = (text) => {
    setSearchText(text);
  };

  //verinin geç yansıması durumunda error vermemesi için koşul.
  if (!userData || !userData[0]) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const filteredData = userData[0].filter(
    (item) =>
      item.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* SEARCH INPUT SECTION*/}
      <View style={styles.searchContainer}>
        <EvilIcons
          style={styles.searchIcon}
          name="search"
          size={28}
          color="black"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="İsim veya soyisim arayın..."
          onChangeText={handleChange}
          value={searchText}
        />
      </View>

      {/* BANNER SECTION*/}
      <View style={styles.bannerContainer}>
        <Image source={banner} style={styles.bannerImage} />
      </View>

      {/* USER LIST SECTION */}
      <ScrollView style={styles.scrollViewContainer} >
          <View style={styles.userContainer} >
            {filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.userCard}
                onPress={() =>
                  navigation.navigate("userDetails", {
                    userId: item.id,
                  })
                }
              >
                <View style={styles.userHeader}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={styles.userImage}
                  />
                </View>
                <View style={styles.userName}>
                  <Text style={styles.userNameText}>
                    {item.first_name} {item.last_name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 20,
    top: 17,
    zIndex: 99,
  },
  inputStyle: {
    width: "90%",
    height: 35,
    backgroundColor: "#EBEBED",
    borderRadius: 6,
    paddingLeft: 40,
  },
  bannerContainer: {
    width: "100%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
   
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  scrollViewContainer: {
    
  },
  userContainer:{
    display:"flex",
    flexDirection:"row", 
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"space-around",
    
  },
  userCard: {
    width: "45%",
    height: 200,
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"#EBEBED",
    borderRadius:20
  },
  userHeader: {
    width: "80%",
    height: "80%",
    borderRadius: 20,
    display:"flex",
    justifyContent: "flex-end",
    
  },
  userName: {
    width: "80%",
    height: "20%",
    display:"flex",
    justifyContent: "center",
  },
  userNameText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  userImage: {
    width: "100%",
    height: "90%",
    borderRadius: 20,
    
  },
});
