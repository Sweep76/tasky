import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Modal, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/ToDoScreenStyles";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function ToDoScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editText, setEditText] = useState("");

  // Add Task
  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask: Task = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  // Delete Task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Mark Task as Completed
  const completeTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Open Edit Modal
  const startEditing = (task: Task) => {
    setEditTask(task);
    setEditText(task.text);
    setModalVisible(true);
  };

  // Save Edited Task
  const saveEdit = () => {
    if (editTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editTask.id ? { ...task, text: editText } : task
        )
      );
    }
    setModalVisible(false);
    setEditTask(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={item.completed ? styles.completedText : styles.taskText}>
              {item.text}
            </Text>
            <View style={styles.taskButtons}>
              <TouchableOpacity onPress={() => completeTask(item.id)}>
                <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => startEditing(item)}>
                <Ionicons name="pencil-outline" size={24} color="orange" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Add Task Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a Task..."
          value={taskText}
          onChangeText={setTaskText}
        />
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Edit Task Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            <TextInput
              style={styles.modalInput}
              value={editText}
              onChangeText={setEditText}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="gray" />
              <Button title="Save" onPress={saveEdit} color="#007bff" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
