import React, { useState, useContext } from 'react'
import Weather from './Weather'
import dataContext from './dataContext'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Location = ({ weather }) => {
  const dateBuilder = (d) => {
    let day = DAYS[d.getDay()]
    let date = d.getDate()
    let month = MONTHS[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div>
      <div className="location-box">
        <div className="location">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
    </div>
  )
}

export default Location
