import React from "react";
import { View, Text } from "react-native";

const CompletedScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Completed Tasks</Text>
      <Text>No completed tasks yet.</Text>
    </View>
  );
};

export default CompletedScreen;
