import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import SpaceQuestions from "../data/space";
import WesternQuestions from "../data/westerns";
import ComputerQuestions from "../data/computers";
import RowItem from "../components/RowItem";

export default ({ navigation }) => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <RowItem
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Space",
            questions: SpaceQuestions,
            color: "#36b1f0",
          })
        }
        color="#36b1f0"
        name="Space"
      />
      <RowItem
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Westerns",
            questions: WesternQuestions,
            color: "#799496",
          })
        }
        color="#799496"
        name="Westerns"
      />
      <RowItem
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Computers",
            questions: ComputerQuestions,
            color: "#79475B",
          })
        }
        color="#79475B"
        name="Computer"
      />
    </ScrollView>
  );
};
