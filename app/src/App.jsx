
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Clients from "./clients";
import Appointments from './appointments';
import ViewClient from './viewClient';
import AddClient from './addClient';
import EditClient from './editClient';

//tabela
import React, {useState, useRef, useEffect} from 'react'

import ButtonCss from './button.css'


function App() {
  
  

  return (
    
    <div className="App">
      <header className="App-header">
      
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/appointments" element={<Appointments />} />
        <Route exact path="/viewclient/:id" element={<ViewClient />} />
        <Route exact path="/addClient" element={<AddClient />} />
        <Route exact path="/editClient/:id" element={<EditClient />} />
      </Routes>
    </div>
    
  );
}

export default App;
