import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskDetails: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  completedText: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "line-through",
    color: "gray",
  },
  taskButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 50,
    padding: 15,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
