import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Customer from './pages/Customer';
import Orders from './pages/Orders';
import Categories from "./pages/Categories";
import Warehouses from "./pages/Warehouses";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/warehouse" element={<Warehouses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;