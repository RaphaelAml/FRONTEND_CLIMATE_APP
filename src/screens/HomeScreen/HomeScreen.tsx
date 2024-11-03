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
import { Forecast } from "../../models/Forecast";
import { Weather } from "../../models/Weather";
import { RootStackParamList } from "../../navigation/Navigations";
import Header from "./Header";

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [forecastData, setForecastData] = useState<Forecast | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [showCityDateModal, setShowCityDateModal] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetchWeatherData();
    fetchForecastData();
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

  const fetchForecastData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/forecast`, {
        cityName: cityName,
        date: date.toISOString().split("T")[0],
      });

      if (response.data && response.data.forecasts) {
        const forecasts = response.data.forecasts.map((forecast: any) => ({
          date: new Date(forecast.timestamp * 1000).toISOString().split("T")[0],
          temp_min: forecast.temp_min,
          temp_max: forecast.temp_max,
          humidity: forecast.humidity,
          wind_speed: forecast.wind_speed,
          description: forecast.weather_description,
        }));

        const forecastData: Forecast = {
          city_name: response.data.city,
          forecast: forecasts.slice(0, 3),
        };

        setForecastData(forecastData);
      } else {
        setForecastData(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setForecastData(null);
    }
    setLoading(false);
  };

  const fetchCitySuggestions = async (query: string) => {
    try {
      const response = await axios.get(`${API_URL}/city?name=${query}`);
      if (response.data) {
        setSuggestions(response.data);
      }
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
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
      <Header
        onLogin={handleLogin}
        onRegister={handleRegister}
        navigation={navigation}
      />

      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <Text style={styles.title}>Weather System</Text>

        <TouchableOpacity
          style={styles.cityDateButton}
          onPress={() => setShowCityDateModal(true)}
        >
          <Text style={styles.cityDateButtonText}>
            Selecionar Cidade e Data
          </Text>
        </TouchableOpacity>

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
          fetchForecastData={fetchForecastData}
        />

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {weatherData && (
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherText}>
              Cidade: {weatherData.city_name}
            </Text>
            <Text style={styles.weatherText}>
              Temperatura: {weatherData.temperature} °C
            </Text>
            <Text style={styles.weatherText}>
              Descrição: {weatherData.weather_description}
            </Text>
          </View>
        )}

        {forecastData && (
          <View style={styles.forecastContainer}>
            <Text style={styles.cityText}>
              Cidade: {forecastData.city_name}
            </Text>
            {forecastData.forecast.slice(0, 4).map((day, index) => (
              <View key={index} style={styles.dayContainer}>
                <Text style={styles.dateText}>Data: {day.date}</Text>
                <Text style={styles.tempText}>
                  Temperatura: {day.temp_min}°C - {day.temp_max}°C
                </Text>
                <Text style={styles.forecastText}>
                  Umidade: {day.humidity}%
                </Text>
                <Text style={styles.windText}>
                  Vento: {day.wind_speed} km/h
                </Text>
                <Text style={styles.descriptionText}>
                  Descrição: {day.description}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {cityName ? (
        <Text style={styles.selectedInfoText}>
          Cidade: {cityName} - Data: {date?.toLocaleDateString("pt-BR")}
        </Text>
      ) : (
        <Text style={styles.selectedInfoText}></Text>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#f5f5f5",
  } as ViewStyle,
  bodyContainer: {
    alignItems: "center",
    paddingVertical: 20,
  } as ViewStyle,
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "700",
  } as TextStyle,
  cityDateButton: {
    backgroundColor: "#4A90E2",
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
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  } as ViewStyle,
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  } as TextStyle,
  selectedInfoText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#555",
  } as TextStyle,
  forecastContainer: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  } as ViewStyle,
  cityText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  } as TextStyle,
  dayContainer: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  } as ViewStyle,
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  } as TextStyle,
  tempText: {
    fontSize: 16,
  } as TextStyle,
  forecastText: {
    fontSize: 16,
  } as TextStyle,
  windText: {
    fontSize: 16,
  } as TextStyle,
  descriptionText: {
    fontSize: 16,
    fontStyle: "italic",
  } as TextStyle,
};

export default HomeScreen;
