import { useState } from 'react'
import './App.css'
import './content.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>DNS Thing</h1>
      </header>

      <div class = "sidebar">
        <a href = "#home">Dashboard</a>
        <a href = "ad_lists">Ad Lists</a>
        <a href = "domain">Domains</a>
        <a href = "settings">Settings</a>
      </div>

      

      <div class = "pictures">

      </div>
    </>
  )
}

export default App
