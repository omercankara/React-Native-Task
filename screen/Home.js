import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../src/Services/Api";
import UserComponent from '../components/UserComponent';
export default function Home({navigation}) {


  
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUser();
        setUserData(userData);
       
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);


  const handleMoviePress = (id) => {
    navigation.navigate('userDetail')
  }

  return (
    <View style={styles.container}>
        <UserComponent userData={userData}/>
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
