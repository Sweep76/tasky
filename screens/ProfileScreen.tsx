import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import profileStyles from "../styles/profileStyles"; // Import styles

const ProfileScreen = () => {
  const handleSignOut = () => {
    console.log("User signed out");
    // TODO: Implement sign-out logic (e.g., Firebase signOut or navigation reset)
  };

  return (
    <View style={profileStyles.container}>
      {/* Profile Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/120" }} // Sample profile image
        style={profileStyles.profileImage}
      />

      {/* Username */}
      <Text style={profileStyles.username}>Joshua Chiu</Text>

      {/* Sign Out Button */}
      <TouchableOpacity style={profileStyles.signOutButton} onPress={handleSignOut}>
        <Text style={profileStyles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
