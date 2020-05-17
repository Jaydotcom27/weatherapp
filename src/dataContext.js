import React, { useState, createContext } from 'react'

const dataContext = createContext(null)

export { dataContext }

export default function DataProvider({ children }) {
  const [weather, setWeather] = useState('')
  return (
    <dataContext.Provider value={{ weather, setWeather }}>
      {children}
    </dataContext.Provider>
  )
}
