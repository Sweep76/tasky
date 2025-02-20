import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";  
import { RootStackParamList } from "../navigation";
import profileStyles from "../styles/profileStyles";

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignOut = () => {
    navigation.replace("Login");
  };

  return (
    <View style={profileStyles.container}>
      {/* Profile Icon */}
      <Ionicons name="person-circle-outline" size={100} color="#007bff" />

      <Text style={profileStyles.username}>Joshua Chiu</Text>

      <TouchableOpacity style={profileStyles.signOutButton} onPress={handleSignOut}>
        <Text style={profileStyles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
