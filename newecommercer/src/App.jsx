import React from "react";
import { Outlet } from 'react-router-dom'
import './Styles/principal.css'

function App() {

  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}

export default App
