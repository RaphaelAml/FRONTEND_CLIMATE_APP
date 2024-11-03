import { API_URL } from "@env";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import CityDateModal from "../../components/CityDateModal";
import { City } from "../../models/City";
import { Weather } from "../../models/Weather";
import { RootStackParamList } from "../../navigation/Navigations";
import styles from '../../styles/HomeScreenStyles';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [showCityDateModal, setShowCityDateModal] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/weather`, {
        cityName: cityName,
        date: date.toISOString().split("T")[0],
      });

      if (response.data && response.data.weather) {
        setWeatherData(response.data.weather);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setLoading(false);
  };

  const fetchCitySuggestions = async (query: string) => {
    try {
      console.log("API URL:", API_URL);

      const response = await axios.get(`${API_URL}/city?name=${query}`);
      if (response.data) {
        setSuggestions(response.data);
      }
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const closeCityDateModal = () => {
    setShowCityDateModal(false);
  };

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        {/* Card com informações do clima */}
        <View style={styles.weatherContainer}>
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          {weatherData && (
            <>
              <Text style={styles.weatherText}>
                Cidade: {weatherData.city_name}
              </Text>
              <Text style={styles.weatherText}>
                Temperatura: {weatherData.temperature} °C
              </Text>
              <Text style={styles.weatherText}>
                Descrição: {weatherData.weather_description}
              </Text>
            </>
          )}
          <TouchableOpacity
            style={styles.cityDateButton}
            onPress={() => setShowCityDateModal(true)}
          >
            <Text style={styles.cityDateButtonText}>
              Selecionar Cidade e Data
            </Text>
          </TouchableOpacity>
        </View>

        {/* Cards vazios */}
        <View style={styles.emptyCard}></View>
        <View style={styles.emptyCard}></View>
      </ScrollView>

      <CityDateModal
        showCityDateModal={showCityDateModal}
        closeCityDateModal={closeCityDateModal}
        cityName={cityName}
        setCityName={setCityName}
        fetchCitySuggestions={fetchCitySuggestions}
        suggestions={suggestions}
        date={date}
        setShowDatePicker={setShowDatePicker}
        showDatePicker={showDatePicker}
        onDateChange={onDateChange}
        fetchWeatherData={fetchWeatherData}
      />

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

export default HomeScreen;
