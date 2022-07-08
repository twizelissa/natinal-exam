import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import SingleCandidate from "../components/ListItem";
import { candidateService } from "../services/candidate";

export default function Candidates() {
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
    <SingleCandidate key={`candidate#${index}`} items={item} />
  );

  return (
    <SafeAreaView>
      <FlatList data={candidates} renderItem={renderItem} />
    </SafeAreaView>
  );
}
