import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
  },
});

class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

export default Quiz;
