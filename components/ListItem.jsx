import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../context/AuthContext";
import { pollService } from "../services/poll";

export default function SingleCandidate({ items: candidate }) {
  const { hasVoted, setHasVoted, authUser } = useContext(AppContext);
  console.log(candidate);

  const handleVote = async () => {
    if (hasVoted) {
      alert("You have already voted!");
      return;
    }

    try {
      await pollService.voteForCandidate(
        authUser._id,
        candidate.poll._id,
        candidate._id
      );
      alert("You have voted for " + candidate.name);
      setHasVoted(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }

    if (!hasVoted) {
      setHasVoted(true);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: candidate.image,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{candidate.names}</Text>
        <Text style={styles.description}>{candidate.mission}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginTop: 16,
          }}
        >
          <TouchableOpacity
            disabled={hasVoted}
            onPress={handleVote}
            style={styles.voteLink}
          >
            Vote
          </TouchableOpacity>
          <Text style={[styles.voteLink, styles.totalVotes]}>
            Total votes: {candidate.votes}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 14,
    color: "#827F7F",
    paddingHorizontal: 16,
  },
  voteLink: {
    fontSize: 14,
    color: "#0B4890",
    // paddingVertical: 8,
    marginTop: 8,
  },
  totalVotes: {},
});
