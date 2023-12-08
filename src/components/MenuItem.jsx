import React from "react"
import { getId } from "../helpers/helpers"

const MenuItem = ({ text = "", url, keyItem }) => {
  const getUniqId = (menuItem) => {
    const id = getId(menuItem)
    console.log(id ?? keyItem)
    return id ?? keyItem
  }

  return url ? (
    <a href={url} onClick={() => getUniqId(text)} target="_blank">
      {text}
    </a>
  ) : (
    <>
      <span>{text}</span>
      <button onClick={() => getUniqId()}>Empty text</button>
    </>
  )
}

export default MenuItem
