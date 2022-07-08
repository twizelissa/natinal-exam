import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button({ onPress, title, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0B4890",
    borderRadius: 2,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: 310,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
