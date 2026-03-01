import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import { fetchWeather } from "./services/weatherService";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Global Weather App </h1>

      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
