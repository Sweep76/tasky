import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TodoScreen from "./screens/TodoScreen";
import CompletedScreen from "./screens/CompletedScreen";
import ProfileScreen from "./screens/ProfileScreen";

// unused Screens
import AddTaskScreen from "./screens/AddTaskScreen";
import EditTaskScreen from "./screens/EditTaskScreen";
import SampleScreen from "./screens/SampleScreen";

// Define types for the navigation params
export type RootStackParamList = {  // <-- Add `export`
    Login: undefined;
    Signup: undefined;
    MainApp: undefined;
    // unused exports
    AddTask: undefined;
    EditTask: undefined;
    SampleScreen: undefined;
  };
  

type TabParamList = {
  ToDos: undefined;
  Completed: undefined;
  Profile: undefined;
};

// Stack Navigator for Auth Screens
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Bottom Tab Navigation (For To-Do List, Completed Tasks, and Profile)
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "list";
          if (route.name === "Completed") {
            iconName = "checkmark-done";
          } else if (route.name === "Profile") {
            iconName = "person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="ToDos" component={TodoScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main Navigation
export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* make sure to add your screens here if you need separate */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />
        {/* unused screens */}
        <Stack.Screen name="SampleScreen" component={SampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
