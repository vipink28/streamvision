import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Navbar from './global/components/Navbar';
import Details from './pages/Details';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homescreen />}></Route>
        <Route path='/details/:type/:id' element={<Details />}></Route>
        <Route path='/browse/:type' element={<Browse />}></Route>
        <Route path='/browsebygenre/:type/:id' element={<BrowseByGenre />}></Route>
        <Route path='/search/:type' element={<SearchResults />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
