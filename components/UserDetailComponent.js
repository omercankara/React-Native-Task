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
          <Text style={styles.userName}>
            {userDetail.first_name} {userDetail.last_name}
          </Text>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Adı Soyadı</Text>
            <Text style={styles.infoText}>
              {userDetail.first_name} {userDetail.last_name}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>E-posta</Text>
            <Text style={styles.infoText}>{userDetail.email}</Text>
          </View>
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
    padding: 20,
    backgroundColor: "#f0f0f0",
   
  },
  userContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    
  },
  userImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 40,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfo: {
    marginTop: 20,
    
  },
  infoItem: {
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: "bold",
    marginBottom: 5,
    
  },
  infoText: {
    fontSize: 16,
    backgroundColor:"#EBE9E9",
    width:'60%',
    height:40,
    borderRadius:10,
    padding:10
  },
});
