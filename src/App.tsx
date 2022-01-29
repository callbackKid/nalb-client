import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { MainPage } from './pages/MainPage/MainPage';
import { PetsPage } from './PetsPage/PetsPage';

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
          <Route path='/pets' element={<PetsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
