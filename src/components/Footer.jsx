import React from "react"
import "./Footer.css"
import Menu from "./Menu"
const Footer = ({ title }) => {
  return (
    <div className="footer">
      <h1>{title}</h1>
      <Menu />
    </div>
  )
}

export default Footer
