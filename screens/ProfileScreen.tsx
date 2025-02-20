import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";  // ✅ Correct import
import profileStyles from "../styles/profileStyles";

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignOut = () => {
    navigation.replace("Login");  // Navigate to Login and remove back stack
  };

  return (
    <View style={profileStyles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/120" }}
        style={profileStyles.profileImage}
      />
      <Text style={profileStyles.username}>Joshua Chiu</Text>

      <TouchableOpacity style={profileStyles.signOutButton} onPress={handleSignOut}>
        <Text style={profileStyles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
