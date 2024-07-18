import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../src/Services/Api";
import { useDispatch } from "react-redux"; 

import UserComponent from '../components/UserComponent';
import { addUserList } from "../store/redux/User"
export default function Home({navigation}) {
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUser();
        dispatch(addUserList(userData.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []); 


 

  return (
    <View style={styles.container}>
        <UserComponent navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:1000,
    width:'100%',
  },
  item:{
    width:'25%',
    height:100,
    backgroundColor:"blue"
  }
});
