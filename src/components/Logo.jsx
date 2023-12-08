import React from "react"
import { connect } from "react-redux"

const Logo = ({ url }) => {
  return <img src={url} alt={"logo"} width="50px" />
}

const data = (state) => {
  return { url: state.imageUrl }
}

export default connect(data)(Logo)
