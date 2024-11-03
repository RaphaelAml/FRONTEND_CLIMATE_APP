import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#f5f5f5",
  },
  bodyContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "rgba(100, 160, 237, 10)", // Azul um pouco mais forte
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff", // Cor do texto para branco
  },
  searchInput: {
    marginTop: 15,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Branco e meio transparente
    padding: 10,
    borderRadius: 5,
    width: '100%',
    fontSize: 16,
  },
  emptyCard: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    height: 100,
    width: '90%',
    borderRadius: 10,
    justifyContent: "center",
  },
  cityDateButton: {
    marginTop: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Branco transparente
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: "center", // Centraliza o texto no botão
  },
  cityDateButtonText: {
    color: "#000", // Cor do texto para preto
    fontSize: 16,
  },
});

export default styles;
