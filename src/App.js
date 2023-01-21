import './App.css';
import Theatre from "./Theatre.js"
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Theatre/>}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
