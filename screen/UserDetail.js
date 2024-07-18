import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchUserById } from "../src/Services/Api";
import { useDispatch } from "react-redux";

import UserDetailComponent from "../components/UserDetailComponent";
import { addUserList } from "../store/redux/User";
export default function Home({ navigation, route }) {
  const id = route.params.userId;
  const [userDetail, setuserDetail] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserById(id);
        console.log(userData)
        setuserDetail(userData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <UserDetailComponent navigation={navigation} userDetail={userDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    width: "100%",
  },
  item: {
    width: "25%",
    height: 100,
    backgroundColor: "blue",
  },
});
