import React from "react";
import { View, Text, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: "https://via.placeholder.com/100" }} // Sample profile image
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>John Doe</Text>
    </View>
  );
};

export default ProfileScreen;
