import { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { candidateService } from "../services/candidate";

export default function CreateCandidate() {
  const [names, setNames] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [party, setParty] = useState("");
  const [mission, setMission] = useState("");
  const [gender, setGender] = useState("");

  const { navigate } = useNavigation();

  const submitForm = async () => {
    try {
      await candidateService.createCandidate({
        names,
        nationalId,
        mission,
        gender,
      });
      alert("Candidate created successfully");
      navigate("Root");
    } catch (error) {
      alert(error.response.data.message);
    }
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
            <Text style={styles.title}>Register a candidate</Text>
            <Text style={styles.innerTitle}>
              After creation they can be voted.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              value={names}
              onChangeText={(names) => setNames(names)}
              Icon={<Feather name="user" size={24} color="silver" />}
              placeholder={"First name"}
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
          <View style={styles.inputContainer}></View>
          {/* <View style={styles.inputContainer}>
            <Input
              value={profile}
              onChangeText={(profile) => setProfile(profile)}
              Icon={<Feather name="user" size={24} color="silver" />}
              placeholder={"Password"}
              secureTextEntry
            />
          </View> */}

          <View style={styles.inputContainer}>
            <Input
              value={mission}
              onChangeText={(mission) => setMission(mission)}
              Icon={
                <MaterialCommunityIcons
                  name="bag-checked"
                  size={24}
                  color="silver"
                />
              }
              placeholder={"Your mission"}
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <Picker
              itemStyle={{
                color: "silver",
              }}
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <Button title={"Create candidate"} onPress={submitForm} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={party}
            onChangeText={(party) => setParty(party)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder={"Political party"}
          />
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
    paddingVertical: 32,
  },
  text: {
    fontSize: 14,
    paddingTop: 8,
    textAlign: "right",
    color: "#0B4890",
  },
});
