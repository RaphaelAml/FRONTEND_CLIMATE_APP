import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker background overlay for better contrast
    justifyContent: "center",
  },
  modalContent: {
    width: "85%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.95)", // Light background for a cleaner look
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#4A90E2", // Use brand color to make the title pop
  },
  searchInput: {
    height: 45,
    backgroundColor: "rgba(240, 240, 240, 1)", // Softer white
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#333", // Dark text for contrast
  },
  datePickerButton: {
    padding: 15,
    backgroundColor: "rgba(74, 144, 226, 0.1)", // Light blue tint
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  datePickerText: {
    color: "#4A90E2",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
  datePickerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#E57373", // Softer red for a less harsh look
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#4A90E2", // Matching brand color for a unified theme
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  selectCityContainer: {
    marginBottom: 20,
  },
  suggestionsContainer: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: -10,
    padding: 10,
  },
});

export default styles;
