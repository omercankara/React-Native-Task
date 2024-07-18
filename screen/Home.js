import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { fetchUser } from "../src/Services/Api";

export default function Home({navigation}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchUser();
        console.log(movieData);
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
      <TouchableOpacity
      
        onPress={() => handleMoviePress(1)}
        style={styles.item}
      >
       
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:1000,
    width:'100%',
    backgroundColor:"black"
  },
  item:{
    width:'25%',
    height:100,
    backgroundColor:"blue"
  }
});
