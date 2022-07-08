import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Emoji from "react-native-emoji";
import { signin } from "../services/auth";
import { save } from "./utils/helpers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } = useNavigation();

  const submitForm = () => {
    signin({
      email,
      password,
    })
      .then(async (res) => {
        try {
          await save("authUser", JSON.stringify(res.data.data.user));
          await save("token", res.data.data.token);

          ToastAndroid.show(
            `Welcome back, ${res.data.names}`,
            ToastAndroid.SHORT
          );

          navigate("Root");
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => console.log(error.response));

    navigate("Root");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/img/logo.png")}
            style={styles.image}
          />
          <Text style={styles.logoText}>MiVote</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>
            Hi, Welcome Back! <Emoji name="wave" style={{ fontSize: 18 }} />
          </Text>
          <Text style={styles.innerTitle}>
            Hello again, you've been missed!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={email}
            onChangeText={(email) => setEmail(email)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder={"Email"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={password}
            onChangeText={(password) => setPassword(password)}
            Icon={<Feather name="lock" size={24} color="silver" />}
            placeholder={"Password"}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={"Sign in"} onPress={submitForm} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Forgot Password?</Text>
        </View>
        <View>
          <Text style={styles.registerLink}>
            Don't have an account?{" "}
            <Text onPress={() => navigate("Register")} style={styles.text}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  header: {
    // marginLeft: 8,
    // paddingTop: 32,
    // padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    paddingVertical: 8,
  },
  innerTitle: {
    fontSize: 14,
    color: "#BCBCBC",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
  },
  logoText: {
    fontSize: 32,
    paddingLeft: 12,
    color: "#0B4890",
  },
  inputContainer: {
    display: "flex",
    paddingHorizontal: 24,
    paddingTop: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    paddingTop: 8,
    textAlign: "right",
    color: "#0B4890",
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  footer: {
    paddingHorizontal: 24,
  },
  registerLink: {
    textAlign: "center",
    paddingTop: 48,
    color: "#A1A1A1",
  },
});
