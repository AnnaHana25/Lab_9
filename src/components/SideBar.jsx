import React from "react"
import "./SideBar.css"
import Menu from "./Menu"

const SideBar = ({ title }) => {
  return (
    <div className="sidebar">
      <h1>{title}</h1>
      <Menu />
    </div>
  )
}

export default SideBar
