import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { updateDate } from "../redux/date-slice"

const CurrentDate = ({ date }) => {
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()
  const dayOfWeek = date.getDay()
  const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]
  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ]

  return `${week[dayOfWeek]}, ${day} ${months[month]}, ${year
    .toString()
    .slice(2)}p`
}

const CurrentTime = ({ date }) => {
  const hours = date.getHours()
  const mins = date.getMinutes()
  const secs = date.getSeconds()

  const normalizeTime = (time) => {
    return time <= 9 ? "0" + time : time
  }

  return ` ${normalizeTime(hours)}:${normalizeTime(mins)}:${normalizeTime(
    secs,
  )}`
}

const DateTime = ({ now, updateDate }) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    updateDate()
  })

  useEffect(() => {
    setDate(new Date(now))
  }, [now])

  return (
    <div>
      <CurrentDate date={date} />
      <CurrentTime date={date} />
    </div>
  )
}

const data = (state) => {
  return { now: state.currentDate }
}

const mapDispatchToProps = (dispatch) => ({
  updateDate: () => {
    setInterval(() => {
      dispatch(updateDate())
    }, 1000)
  },
})

export default connect(data, mapDispatchToProps)(DateTime)
