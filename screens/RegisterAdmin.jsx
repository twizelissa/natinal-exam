import { useState } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import Input from "../components/Input";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { signup } from "../services/auth";
import { setItemAsync } from "expo-secure-store";

export default function RegisterAdmin() {
  const [names, setNames] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");

  const { navigate } = useNavigation();

  const submitForm = () => {
    signup({
      names,
      address,
      email,
      password,
      nationalId,
      phone,
    })
      .then(async (res) => {
        await setItemAsync.setItem("user", res.data.user);
        await setItemAsync.setItem("token", res.data.token);
        ToastAndroid.show(
          `Welcome back, ${res.data.user.names}`,
          ToastAndroid.SHORT
        );
        // setNames("");
        // setAddress("");
        // setEmail("");
        // setPassword("");
        // setNationalId("");
        // setPhone("");

        navigate("Root");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <View style={styles.inputContainer}>
        <Input
          value={names}
          onChangeText={(names) => setNames(names)}
          Icon={<Feather name="user" size={24} color="silver" />}
          placeholder={"Full name"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={address}
          onChangeText={(address) => setAddress(address)}
          Icon={<Feather name="user" size={24} color="silver" />}
          placeholder={"Address"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          Icon={<Feather name="user" size={24} color="silver" />}
          placeholder={"Phone number"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          Icon={<Feather name="mail" size={24} color="silver" />}
          placeholder={"Email"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={nationalId}
          onChangeText={(nationalId) => setNationalId(nationalId)}
          Icon={<FontAwesome name="id-card" size={24} color="silver" />}
          placeholder={"National id"}
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
        <Button title={"Sign up"} onPress={submitForm} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    marginLeft: 8,
    paddingTop: 20,
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
    width: 40,
    marginTop: 10,
    height: 40,
  },
  logoText: {
    fontSize: 30,
    paddingLeft: 12,
    marginTop: 10,
    color: "#0B4890",
  },
  inputContainer: {
    display: "flex",
    paddingHorizontal: 24,
    paddingTop: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  text: {
    fontSize: 14,
    paddingTop: 8,
    textAlign: "right",
    color: "#0B4890",
  },
});
