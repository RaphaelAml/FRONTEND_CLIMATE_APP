export interface RawForecastAPI {
  cityId: number;
  cityForecastId: number;
  city_name: string;
  country: string;
  temperature: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather_id: number;
  weather_main: string;
  weather_description: string;
  timestamp: number;
}
