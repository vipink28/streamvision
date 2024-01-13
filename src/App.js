import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homescreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
