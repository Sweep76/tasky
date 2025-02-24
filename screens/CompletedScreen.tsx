import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import completedStyles from "../styles/completedStyles";

const styles = completedStyles;

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const CompletedScreen = () => {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([
    { id: 1, text: "Buy groceries Tomorrow", completed: true },
    { id: 2, text: "Finish project report", completed: true },
    { id: 3, text: "Workout for 30 minutes", completed: true },
    { id: 4, text: "Finish Mobdevs Assignment Yet", completed: true },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editedText, setEditedText] = useState("");

  // Delete task function
  const deleteTask = (id: number) => {
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Open edit modal
  const openEditModal = (task: Task) => {
    setSelectedTask(task);
    setEditedText(task.text);
    setModalVisible(true);
  };

  // Save edited task
  const saveEdit = () => {
    if (selectedTask) {
      setCompletedTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === selectedTask.id ? { ...task, text: editedText } : task
        )
      );
      setModalVisible(false);
      setSelectedTask(null);
    }
  };

  return (
    <View style={styles.container}>
      {completedTasks.length === 0 ? (
        <Text style={styles.emptyText}>No completed tasks yet.</Text>
      ) : (
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <TouchableOpacity onPress={() => openEditModal(item)} style={{ flex: 1 }}>
                <Text style={styles.completedText}>{item.text}</Text>
              </TouchableOpacity>
              <View style={styles.taskButtons}>
                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                  <Ionicons name="trash-outline" size={27} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      {/* Edit Task Modal */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            <TextInput
              style={styles.input}
              value={editedText}
              onChangeText={setEditedText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={saveEdit}>
                <Text style={styles.saveButton}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CompletedScreen;
