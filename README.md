# Global Weather App

A **React + Vite** project that displays current weather and next hour forecast for any city worldwide.  
It shows both **city local time** (from API) and **user current time**, along with temperature, weather description, humidity, and wind speed.

## Features

1. Search weather for **any city**
2. Display **current temperature, humidity, wind speed, and weather description**
3. Show **Weather Time** (city local) and **Current Time** (user system)
4. **Next hour forecast** using OpenWeather One Call API
5. Responsive **modern card design**
6. Frontend-only, **Vercel / Netlify deploy ready**

## Technologies Used

- React
- Vite
- CSS (responsive cards)
- OpenWeather API

## Getting Started

### 1. Clone the repository

git clone <your-repo-url>
cd global-weather-app

## Install dependencies

npm install

## Add API Key

Create .env file in the root:
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
Get a free API key from OpenWeatherMap

Free Api Link..https://home.openweathermap.org/users/sign_up

## Run the development server

npm run dev

App will run at http://localhost:5173 (default Vite port)

## File Structure

## File Structure

src/
├── components/
│ ├── WeatherCard.jsx # Displays weather info, city, and times
│ ├── SearchBar.jsx # City search input
│ ├── Loader.jsx # Loading spinner
│
├── services/
│ └── weatherService.js # Handles API calls to OpenWeather
│
├── App.jsx # Main App component
├── main.jsx # Vite entry point
├── App.css # Global styles

## Notes

Weather Time comes from API city timezone

Current Time comes from user browser/system clock

Difference between the two is normal if user is in a different timezone

Small cities or politically disputed regions may require coordinates instead of city name

## 🔗References

- [OpenWeather API](https://openweathermap.org/api) – Official OpenWeather API documentation for current weather and forecasts.
- [Vite](https://vitejs.dev/) – Fast frontend build tool with React integration.
- [React](https://react.dev/) – Official React documentation and learning resources.

```

```
