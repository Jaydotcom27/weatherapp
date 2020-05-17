import React, { useState, useContext } from 'react'
import dataContext from './dataContext'

const Weather = () => {
  const { weather, setWeather } = useContext(dataContext)
  const [location, setlocation] = useState('test')
  return (
    <div className="weather-box">
      <div className="temp">{Math.round(weather.main.temp)}°c </div>
      <div className="weather">{weather.weather[0].main}</div>
    </div>
  )
}

export default Weather
