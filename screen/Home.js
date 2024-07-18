import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { fetchUser } from "../src/Services/Api";



export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchUser();
        console.log(movieData)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);



  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
