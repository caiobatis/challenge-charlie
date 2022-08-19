import client from '../../api';
import { TLocation } from '../location/types';
import { IForecast, IForecastData, IWeatheData, IWeather } from './types';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getForecast = async (
  latitude: TLocation['latitude'],
  longitude: TLocation['longitude'],
): Promise<IForecast> => {
  const { data } = await client.get<IForecastData>(`${API_BASE_URL}/onecall`, {
    params: {
      lat: latitude,
      lon: longitude,
      exclude: 'hourly,minutely,alerts',
      units: 'metric',
      lang: 'pt_br',
      appid: process.env.OPEN_WEATHER_KEY,
    },
  });

  const daily = data.daily.slice(0, 2).map(day => ({
    max: day.temp.max,
    min: day.temp.min,
    weatherType: day.weather[0].main,
  }));

  return {
    current: {
      humidity: data.current?.humidity,
      temperature: data.current?.temp,
      pressure: data.current?.pressure,
      weatherType: data.current?.weather[0].main,
      weather: data.current?.weather[0].description,
      wind: data.current?.wind_speed,
    },
    otherDays: daily,
  };
};

const getWeather = async (location: string): Promise<IWeather> => {
  const { data } = await client.get<IWeatheData>(`${API_BASE_URL}/weather`, {
    params: {
      q: location,
      APPID: process.env.OPEN_WEATHER_KEY,
      units: 'metric',
      lang: 'pt_br',
      cnt: 24,
    },
  });

  const forecast = await getForecast(data.coord.lat, data.coord.lon);

  return {
    ...forecast,
    name: data.name,
  };
};

export default { getWeather, getForecast };
