import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Task {
  id: number;
  title: string;
  details: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  completedTasks: Task[];
  addTask: (title: string, details: string) => void;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
  uncompleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks, completedTasks]);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("tasks");
      const storedCompleted = await AsyncStorage.getItem("completedTasks");
      if (storedTasks) setTasks(JSON.parse(storedTasks));
      if (storedCompleted) setCompletedTasks(JSON.parse(storedCompleted));
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      await AsyncStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    } catch (error) {
      console.error("Failed to save tasks:", error);
    }
  };

  const addTask = (title: string, details: string) => {
    const newTask: Task = { id: Date.now(), title, details, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    setCompletedTasks(completedTasks.filter(task => task.id !== id));
  };

  const completeTask = (id: number) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
      setTasks(tasks.filter(task => task.id !== id));
      setCompletedTasks([...completedTasks, { ...task, completed: true }]);
    }
  };

  const uncompleteTask = (id: number) => {
    const task = completedTasks.find(task => task.id === id);
    if (task) {
      setCompletedTasks(completedTasks.filter(task => task.id !== id));
      setTasks([...tasks, { ...task, completed: false }]);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, completedTasks, addTask, deleteTask, completeTask, uncompleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};
