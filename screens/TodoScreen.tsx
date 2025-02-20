import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";

const TodoScreen = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>To-Do List</Text>
      <TextInput
        placeholder="Enter task..."
        value={task}
        onChangeText={setTask}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TodoScreen;
