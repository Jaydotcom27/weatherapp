import React, { useState, useEffect } from 'react'
import Location from './Location'
import Weather from './Weather'
import dataContext from './dataContext'

function App() {
  const [weather, setWeather] = useState('')
  const [query, setQuery] = useState('')

  const api = {
    key: '07d60de775253ca943f4f4af9d24ec7c',
    base: 'https://api.openweathermap.org/data/2.5/',
  }

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          console.log(result)
        })
    }
  }

  return (
    <dataContext.Provider value={{ weather, setWeather }}>
      <div
        className={
          typeof weather.main != 'undefined'
            ? weather.main.temp > 16
              ? 'App warm'
              : 'App'
            : 'App'
        }
      >
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          <div>
            {typeof weather.main != 'undefined' ? (
              <div>
                <Location></Location>
                <Weather></Weather>
              </div>
            ) : (
              ''
            )}
          </div>
        </main>
      </div>
    </dataContext.Provider>
  )
}

export default App
