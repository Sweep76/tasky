import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/AddTaskStyles";

// Define Task type to resolve errors
type Task = {
  id: number;
  title: string;
  details: string;
  completed: boolean;
};

export default function AddTaskScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { setTasks } = route.params as { setTasks: React.Dispatch<React.SetStateAction<Task[]>> };

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const addTask = () => {
    if (taskTitle.trim() === "" || taskDetails.trim() === "") return;
    const newTask: Task = { id: Date.now(), title: taskTitle, details: taskDetails, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <TextInput style={styles.input} placeholder="Task Title" value={taskTitle} onChangeText={setTaskTitle} />
      <TextInput style={styles.input} placeholder="Task Details" value={taskDetails} onChangeText={setTaskDetails} multiline />
      <View style={styles.buttons}>
        <Button title="Cancel" onPress={() => navigation.goBack()} color="red" />
        <Button title="Add Task" onPress={addTask} color="darkblue" />
      </View>
    </View>
  );
}
