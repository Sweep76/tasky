import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  taskItem: {
    backgroundColor: "#e9ecef",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderColor: "black",
    borderWidth: 1,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
    color: "#333",
  },
  completedText: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
    color: "gray",
    textDecorationLine: "line-through",
  },
  taskDetails: {
    marginTop: 5,
    fontSize: 16,
    color: "#555",
  },
  taskButtons: {
    flexDirection: "row",
    justifyContent: "flex-end", // Align buttons to the right
    marginTop: 15,
    gap: 10, // Add space between buttons
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginTop: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center", // Centers horizontally
    backgroundColor: "darkblue",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "95%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default styles;
