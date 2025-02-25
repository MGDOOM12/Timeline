import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
