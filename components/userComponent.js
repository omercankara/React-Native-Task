import { StyleSheet, Text, View  } from "react-native";
import React from "react";

export default function UserComponent({ userData }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.searchContainer}>
          <View style={styles.searchİnput}>

          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 1000,
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
  },
  searchContainer:{
    width:'100%',
    height:70,
    backgroundColor:"red",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  searchİnput:{
    width:'80%',
    height:50,
    backgroundColor:"gray"
  }
});
