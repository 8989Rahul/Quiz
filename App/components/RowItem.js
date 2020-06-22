import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#36B1F0",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 1,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default ({ onPress = () => {}, name, color }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.row, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
