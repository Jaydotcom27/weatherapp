import React, { useState } from 'react'
import Location from './Location'
import Weather from './Weather'

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
              className="search-bar"
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
              placeholder="Search..."
              type="text"
              value={query}
            />
          </div>
          <div>
            {typeof weather.main !== 'undefined' && (
              <div>
                <Location weather={weather} />
                <Weather weather={weather} />
              </div>
            )}
          </div>
        </main>
      </div>
  )
}

export default App
