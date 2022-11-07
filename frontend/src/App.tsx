import React from "react";
import logo from "./logo.svg";
import "./App.css";
// react-router-domのインポートを追加
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

//ページの追加
import { Home } from "./pages/Home";
import { Stockinfo } from "./pages/Stockinfo";
import { Stockpredict } from "./pages/Stockpredict";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to="/">Home</NavLink>
                <br />
                <NavLink to="/stockinfo">Stockinfo</NavLink>
                <br />
                <NavLink to="/stockpredict">Stockpredict</NavLink>
                <br />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="stockinfo" element={<Stockinfo />} />
                    <Route path="stockpredict" element={<Stockpredict />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
