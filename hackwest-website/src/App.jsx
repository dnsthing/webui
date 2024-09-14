import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import  Dashboard  from './dashboard.jsx';
import  Domains  from './domain.jsx';
import AdList from './adlist.jsx';
import Whitelist from './whitelist.jsx';
import Settings from './settings.jsx';
import { Provider } from "react-redux";



function App() {
  return (
    <>
   <header>
        <h1>DNS Thing</h1>
      </header>

      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path ='/dashboard' element={<Dashboard/>}/>
          <Route path ='/domains' element={<Domains/>}/>
          <Route path ='/ad-lists' element={<AdList/>}/>
          <Route path ='/whitelist' element={<Whitelist/>}/>
          <Route path ='/settings' element={<Settings/>}/>
        </Routes>
      </BrowserRouter>


      <div class = "sidebar">
        <a href = "ad-lists">Dashboard</a>
        <a href = "ad-lists">Ad Lists</a>
        <a href = "domains">Domains</a>
        <a href = "whitelist">Whitelist</a> 
        <a href = "settings">Settings</a>
      </div>

      

      <div class = "pictures">

      </div>
   </>
  )
}

export default App
