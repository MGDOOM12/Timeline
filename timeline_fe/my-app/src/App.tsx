import {useState} from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    {/* {logged in route} */}
  </Routes>
  );
}

export default App;
