import React from "react";
import Box from "@mui/material/Box";
// react-router-domのインポートを追加
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

//モジュールの追加
import Header from "./modules/header";
import Footer from "./modules/footer";

//ページの追加
import { Home } from "./pages/Home";
import { Stockinfo } from "./pages/Stockinfo";
import { Stockpredict } from "./pages/Stockpredict";
import { Notfound } from "./pages/Notfound";

export default function App() {
    return (
        <BrowserRouter>
            <Box component={"div"} id={"app"} sx={all_style}>
                <Header></Header>
                <Box component={"main"}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="stockinfo" element={<Stockinfo />} />
                        <Route path="stockpredict" element={<Stockpredict />} />
                        <Route path="/*" element={<Notfound />} />
                    </Routes>
                </Box>
                <Footer></Footer>
            </Box>
        </BrowserRouter>
    );
}

const all_style = {
    margin: 0,
    padding: 0,
    fontFamily: "Inter",
};
