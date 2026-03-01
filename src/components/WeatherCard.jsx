import { useEffect, useState } from "react";

export default function WeatherCard({ data }) {
  const getLocalTime = (dt, timezone) => {
    const utc = dt * 1000;
    const localTime = new Date(utc + timezone * 1000);
    return localTime.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const [liveTime, setLiveTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setLiveTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const apiTime = getLocalTime(data.dt, data.timezone);

  return (
    <div className="card">
      <h2>{data.name}</h2>

      <h4>Weather Time: {apiTime}</h4>
      <h4>
        Current Time:{" "}
        {liveTime.toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </h4>

      <h1>{data.main.temp}°C</h1>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}
