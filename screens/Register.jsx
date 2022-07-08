import { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "../components/Input";
import { Entypo, Feather } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import RegisterAdmin from "./RegisterAdmin";

export default function Register() {
  const [names, setNames] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [createAdmin, setCreateAdmin] = useState(false);
  const { navigate } = useNavigation();

  const submitForm = () => {
    navigate("Login");
  };

  const registerAdmin = () => {
    setCreateAdmin((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/img/logo.png")}
              style={styles.image}
            />
            <Text style={styles.logoText}>MiVote</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.innerTitle}>Make your vote matter today.</Text>
          </View>
          {createAdmin ? (
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
                  placeholder={"Last name"}
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
              <View style={styles.inputContainer}></View>
              <View style={styles.inputContainer}>
                <Input
                  value={nationalId}
                  onChangeText={(nationalId) => setNationalId(nationalId)}
                  Icon={<Entypo name="address" size={24} color="silver" />}
                  placeholder={"KN 189 ...."}
                  secureTextEntry
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button title={"Sign up"} onPress={submitForm} />
              </View>
            </>
          ) : (
            <RegisterAdmin />
          )}
        </View>
        <View style={styles.footer}>
          <View>
            <TouchableOpacity onPress={registerAdmin}>
              <Text style={styles.adminRegister}>
                {!createAdmin ? "Register as voter" : "Register as admin"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.loginLink}>
              Already have an account?{" "}
              <Text onPress={() => navigate("Login")} style={styles.text}>
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  loginLink: {
    textAlign: "center",
    color: "#A1A1A1",
    paddingVertical: 36,
  },
  adminRegister: {
    textAlign: "center",
    color: "#0B4890",
    paddingTop: 16,
  },
});
