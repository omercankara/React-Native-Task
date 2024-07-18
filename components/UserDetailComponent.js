import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

export default function UserDetailComponent({ userDetail }) {
  useEffect(() => {
    console.log(userDetail);
  }, [userDetail]);

 
  if (!userDetail) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <View style={styles.userContent}>
          <Image source={{ uri: userDetail.avatar }} style={styles.userImage} />
          <Text>{userDetail.email}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  userHeader: {
    width: "100%",
    height: 100,
    
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  userContent: {
    flexDirection: "row",
    alignItems: "center",
    
    padding: 10,
    borderRadius: 8,
  },
  userImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 40,
    marginRight: 10,
  },
});
