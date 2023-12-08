import React from "react"
import "./styles.css"
import Header from "./components/Header"
import Content from "./components/Content"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="container">
      <Header title="Header"></Header>
      <Content title="Content"></Content>
      <SideBar title="SideBar" style={{ width: 200 }}></SideBar>
      <Footer title="Footer" style={{ bottom: 0 }}></Footer>
    </div>
  )
}

export default App
