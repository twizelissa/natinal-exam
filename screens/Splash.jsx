import React, { useState, useEffect, useContext } from "react";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { AppContext } from "../context/AuthContext";
import { getValueFor } from "./utils/helpers";

export default function Splash({ navigation }) {
  const { setAuthUser } = useContext(AppContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const authUser = await getValueFor("authUser");
        if (authUser) {
          setAuthUser(authUser);
          navigation.navigate("Home");
        } else {
          navigation.navigate("Login");
        }
      } catch (error) {
        console.log(error);
        navigation.navigate("Login");
      }
    };
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Image source={require("../assets/img/white_logo.png")} />
        <Text style={styles.text}>MiVote</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B4890",
    height: "100%",
  },
  text: {
    paddingTop: 50,
    fontSize: 32,
    color: "#FFFFFF",
  },
});
