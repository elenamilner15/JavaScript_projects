import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components from react-bootstrap

import ErrorBoundary from "./Components/ErrorBoundary";


const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile Screen</h1>;
const ShopScreen = () => {
  throw new Error("shop");
};
// const ShopScreen = () => <h1>shop</h1>;





function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;