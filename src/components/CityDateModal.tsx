import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import {Keyboard,Modal,StyleSheet,Text,TextInput,TouchableOpacity,TouchableWithoutFeedback,View,} from "react-native";
import { City } from "../models/City";
import CitySuggestionsList from "./CitySuggestionsList";
import styles from "../styles/CityDateModalStyles";

interface CityDateModalProps {
  showCityDateModal: boolean;
  closeCityDateModal: () => void;
  cityName: string;
  setCityName: (name: string) => void;
  fetchCitySuggestions: (text: string) => void;
  suggestions: City[];
  date: Date;
  setShowDatePicker: (show: boolean) => void;
  showDatePicker: boolean;
  onDateChange: (event: any, selectedDate?: Date) => void;
  fetchWeatherData: () => void;
  fetchForecastData: () => void;
}

class CityDateModal extends React.Component<CityDateModalProps> {
  state = {
    suggestionsVisible: false,
  };

  handleCityInputChange = (text: string) => {
    const { setCityName, fetchCitySuggestions } = this.props;
    setCityName(text);
    fetchCitySuggestions(text);
    this.setState({ suggestionsVisible: true });
  };

  handleCitySelection = (city: City) => {
    const { setCityName } = this.props;
    setCityName(city.name);
    this.setState({ suggestionsVisible: false });
  };

  render() {
    const {
      showCityDateModal,
      closeCityDateModal,
      cityName,
      suggestions,
      date,
      setShowDatePicker,
      showDatePicker,
      onDateChange,
      fetchWeatherData,
      fetchForecastData,
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCityDateModal}
          onRequestClose={closeCityDateModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Selecione a Cidade e a Data</Text>

              <View style={styles.selectCityContainer}>
                <TextInput
                  value={cityName}
                  onChangeText={this.handleCityInputChange}
                  placeholder="Digite o nome da cidade"
                  style={styles.searchInput} // Utiliza o novo estilo
                  onFocus={() => this.setState({ suggestionsVisible: true })}
                />

                {this.state.suggestionsVisible && suggestions.length > 0 && (
                  <CitySuggestionsList
                    suggestions={suggestions}
                    onSelectCity={(city) => {
                      this.handleCitySelection(city);
                    }}
                  />
                )}
              </View>

              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={styles.datePickerButton}
              >
                <View style={styles.datePickerContent}>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={24}
                    color="black"
                  />
                  <Text style={styles.datePickerText}>
                    Data: {date.toLocaleDateString("pt-BR")}
                  </Text>
                </View>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onDateChange}
                />
              )}

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => {
                    fetchWeatherData();
                    fetchForecastData();
                    closeCityDateModal();
                  }}
                  style={styles.modalButton} // Novo estilo para o botão Aplicar
                >
                  <Text style={styles.modalButtonText}>Aplicar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={closeCityDateModal}
                  style={styles.closeButton} // Novo estilo para o botão Fechar
                >
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    );
  }
}

export default CityDateModal;
