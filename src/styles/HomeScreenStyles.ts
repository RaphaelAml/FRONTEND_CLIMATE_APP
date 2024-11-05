// src/styles/HomeScreenStyles.ts

import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#f0f2f5",
  } as ViewStyle,
  bodyContainer: {
    alignItems: "center",
    paddingVertical: 20,
  } as ViewStyle,
  weatherContainer: {
    width: '90%',
    marginVertical: 20,
    padding: 20,
    backgroundColor: "rgba(74, 144, 226, 0.9)",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  } as ViewStyle,
  weatherText: {
    fontSize: 16, // Reduzido
    color: "#ffffff",
    fontWeight: "600",
    marginBottom: 8,
  } as TextStyle,
  placeholderText: {
    fontSize: 14, // Reduzido
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
  } as TextStyle,
  cityDateButton: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  } as ViewStyle,
  cityDateButtonText: {
    color: "#4A90E2",
    fontSize: 15, // Reduzido
    fontWeight: "500",
  } as TextStyle,
  forecastContainer: {
    width: '90%',
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  } as ViewStyle,
  cityText: {
    fontSize: 18, // Reduzido
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  } as TextStyle,
  dayContainer: {
    marginBottom: 12,
    padding: 15,
    backgroundColor: "rgba(74, 144, 226, 0.9)", // Atualizado para o azul semitransparente
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(74, 144, 226, 0.6)", // Bordas com tom similar
  } as ViewStyle,
  dateText: {
    fontSize: 16, // Reduzido
    fontWeight: "bold",
    color: "#ffffff", // Ajustado para contraste no fundo azul
    marginBottom: 6,
  } as TextStyle,
  tempText: {
    fontSize: 14, // Reduzido
    color: "#ffffff", // Ajustado para contraste
    marginBottom: 3,
  } as TextStyle,
  forecastText: {
    fontSize: 14, // Reduzido
    color: "#ffffff", // Ajustado para contraste
    marginBottom: 3,
  } as TextStyle,
  windText: {
    fontSize: 14, // Reduzido
    color: "#ffffff", // Ajustado para contraste
    marginBottom: 3,
  } as TextStyle,
  descriptionText: {
    fontSize: 13, // Reduzido
    fontStyle: "italic",
    color: "#e0e4e8", // Cor de descrição para contraste suave
    marginBottom: 4,
  } as TextStyle,
});

export default styles;
