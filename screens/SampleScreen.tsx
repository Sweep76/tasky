import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SampleScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>This is a Sample Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
