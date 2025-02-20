import { StyleSheet } from "react-native";

const completedStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
  taskItem: {
    backgroundColor: "#e9ecef",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedText: {
    fontSize: 16,
    color: "gray",
    textDecorationLine: "line-through",
  },
});

export default completedStyles;
