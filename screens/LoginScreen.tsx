import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles/loginStyles";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  MainApp: undefined;
};

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Add the Image */}
      <Image source={require("../assets/images/login-background.png")} style={styles.image} />
      
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.description}>You got things to do</Text>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainApp")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default LoginScreen;