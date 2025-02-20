import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import completedStyles from "../styles/completedStyles"; // Import the styles

const styles = completedStyles;


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const completedTasks: Task[] = [
  { id: 1, text: "Buy groceries Tomorrow", completed: true },
  { id: 2, text: "Finish project report", completed: true },
  { id: 3, text: "Workout for 30 minutes", completed: true },
  { id: 4, text: "Finish Mobdev Assignment", completed: true },
];

const CompletedScreen = () => {
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
              <Text style={styles.completedText}>{item.text}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CompletedScreen;
