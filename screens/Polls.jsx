import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import SingleCandidate from "../components/ListItem";

export default function Polls() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await candidateService
        .getCandidates()
        .then((res) => {
          setCandidates(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => (
    <SingleCandidate key={`poll#${index}`} items={item} />
  );

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ paddingVertical: 16, backgroundColor: "white" }}>
        <FlatList data={candidates} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}
