
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Layout from './components/shared/Layout';
import AdminContextProvider from './Context/AdminContext';
// import Customers from './pages/Customers';
// import Transactions from './pages/Transactions';
// import Connect from './pages/Connect';
// import Settings from './pages/Settings';
// import Warehouses from './pages/Warehouses';
// import Myaccount from './pages/Myaccount';
// import Farmers from './pages/Farmers';
// import Drivers from './pages/Drivers';
// import Categories from './pages/Categories';
// import test1 from './pages/test1';


function App() {
  return (
    <AdminContextProvider>
    <BrowserRouter>
        <div className="App">
          <header className="App-header" >
            <Routes>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/CreateAccount" element={<CreateAccount />}></Route>
              <Route path="/" element={<Layout name="Dashbord" />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="/Settings" element={<Settings />}></Route>
              </Route>

              {/* <Route path="/Customers" element={<Customers/>}></Route>
          <Route path="/Transactions" element={<Transactions/>}></Route>
          <Route path="/Connect" element={<Connect/>}></Route>
          <Route path="/Settings" element={<Settings/>}></Route>
          <Route path="/Warehouses" element={<Warehouses/>}></Route>
          <Route path="/Myaccount" element={<Myaccount/>}></Route>
          <Route path="/Farmers" element={<Farmers/>}></Route>
          <Route path="/Drivers" element={<Drivers/>}></Route>
          <Route path="/Categories" element={<Categories/>}></Route>
          <Route path="/test1" element={<test1/>}></Route> */}
            </Routes>
          </header>
        </div>
      </BrowserRouter>
      </AdminContextProvider>
  );
}

export default App;
