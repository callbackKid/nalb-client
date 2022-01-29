import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='header'>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
