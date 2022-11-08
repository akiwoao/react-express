import React from "react";
import "./App.css";
// react-router-domのインポートを追加
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

//モジュールの追加
import Header from "./modules/header";

//ページの追加
import { Home } from "./pages/Home";
import { Stockinfo } from "./pages/Stockinfo";
import { Stockpredict } from "./pages/Stockpredict";
import { Notfound } from "./pages/Notfound";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="stockinfo" element={<Stockinfo />} />
                        <Route path="stockpredict" element={<Stockpredict />} />
                        <Route path="/*" element={<Notfound />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
