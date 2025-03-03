import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/EditTaskStyles";

// Define Task Interface
interface Task {
  id: number;
  title: string;
  details: string;
  completed: boolean;
}

export default function EditTaskScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  // Extract task from route params (without setTasks)
  const { task } = route.params as { task: Task };

  const [editTitle, setEditTitle] = useState(task.title);
  const [editDetails, setEditDetails] = useState(task.details);

  const saveEdit = () => {
    // Instead of setTasks, update the tasks in AsyncStorage or use Context API
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Task</Text>
      <TextInput style={styles.input} value={editTitle} onChangeText={setEditTitle} placeholder="Edit Title" />
      <TextInput style={styles.input} value={editDetails} onChangeText={setEditDetails} placeholder="Edit Details" multiline />
      <View style={styles.buttons}>
        <Button title="Cancel" onPress={() => navigation.goBack()} color="red" />
        <Button title="Save" onPress={saveEdit} color="#007bff" />
      </View>
    </View>
  );
}
