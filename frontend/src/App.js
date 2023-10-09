import React from 'react'
import Router from "./pages/router"
import ThemeProvider from "./context/ThemeContext";
import "./styles/index.scss";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App