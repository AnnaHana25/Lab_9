import React from "react"
import "./Header.css"
import Logo from "./Logo"
import DateTime from "./DateTime"

const Header = ({ title }) => {
  return (
    <div className="header">
      <Logo />
      <h1>{title}</h1>
      <DateTime />
    </div>
  )
}

export default Header
