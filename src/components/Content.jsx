import React, { useEffect, useState } from "react"
import "./Content.css"

const Content = ({ title }) => {
  const [breweries, setBreweries] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    getList(page)
  })

  const getList = (pageNumber) => {
    const url = `https://api.openbrewerydb.org/v1/breweries?page=${pageNumber}`

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then(setBreweries)
  }
  return (
    <div className="content">
      <h1>{title}</h1>

      <button
        onClick={() => {
          setPage(page + 1)
          getList(page + 1)
        }}
      >
        Get next page
      </button>
      <div className="itemlist">
        {breweries.length &&
          breweries.map((item) => {
            return <div key={item.id}>Name: {item.name}</div>
          })}
      </div>
    </div>
  )
}

export default Content
