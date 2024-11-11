import { ViewStyle, TextStyle } from "react-native";

const styles = {
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#e7f1f9", // Fundo suave azul claro
  } as ViewStyle,
  bodyContainer: {
    alignItems: "center",
    paddingVertical: 20,
  } as ViewStyle,
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "700",
    color: "#333", // Cor de texto mais escura para maior contraste
  } as TextStyle,
  cityDateButton: {
    backgroundColor: "#4A90E2", // Azul suave para botões
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  } as ViewStyle,
  cityDateButtonText: {
    color: "white",
    fontSize: 16,
  } as TextStyle,
  weatherContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#e0f7fa", // Azul clarinho para o card de clima
    padding: 15,
    borderRadius: 10,
    elevation: 2, // Elevation leve para uma aparência mais sutil
  } as ViewStyle,
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333", // Cor escura para contraste
  } as TextStyle,
  selectedInfoText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#555",
  } as TextStyle,

  cityText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Ajuste conforme necessário
  } as TextStyle,

  dateText: {
    fontSize: 16,
    color: "#666", // Ajuste conforme necessário
  } as TextStyle,

  tempText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#777", // Ajuste conforme necessário
  } as TextStyle,

  forecastText: {
    fontSize: 16,
    color: "#777", // Ajuste conforme necessário
  } as TextStyle,

  windText: {
    fontSize: 16,
    color: "#555", // Ajuste conforme necessário
  } as TextStyle,
  
  // Forecast Card modernizado
  forecastCard: {
    width: "90%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#e0f7fa", // Azul clarinho para o card de previsão
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginVertical: 20,
  } as ViewStyle,

  forecastList: {
    marginTop: 10,
  } as ViewStyle,

  forecastItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Linha fina entre os itens
  } as ViewStyle,

  weatherCard: {
    width: "90%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#e0f7fa", // Azul bem suave para o card de clima
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
    marginVertical: 10,
  } as ViewStyle,
  weatherCardCity: {
    fontSize: 29,
    fontWeight: "700",
    color: "#777", // Azul para o nome da cidade
    marginBottom: 5,
  } as TextStyle,
  weatherCardTemp: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#777", // Cor escura para a temperatura
    marginBottom: 5,
  } as TextStyle,
  weatherCardDesc: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#777", // Descrição mais clara
  } as TextStyle,

  // Novo estilo para o card da barra de pesquisa
  searchBarCard: {
    width: "90%",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#e0f7fa", // Cor branca para destacar
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: "center",
    marginBottom: 20,
  } as ViewStyle,

  cityDateSearchBar: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f5f5f5", // Fundo suave para o campo de busca
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ccc", // Bordas mais claras para sutileza
  } as TextStyle,

  descriptionText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#777", // Cor de texto suave para descrições
  } as TextStyle,
};

export default styles;


