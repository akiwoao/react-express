import React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

//コンポーネントの追加
import Stockchart from "../components/stockchart";

//テストデータの追加
import test from "../test.json";

export const Stockinfo = () => {
    const params = new URLSearchParams(useLocation().search);
    const data = test.data[parseInt(params.get("index")!)].stocks.map(
        (stock) => ({
            x: new Date(stock.date),
            y: [stock.open, stock.high, stock.low, stock.close],
        })
    );
    return (
        <Box component={"div"} sx={wrapper}>
            <Box component={"div"} sx={main}>
                <Stockchart data={data}></Stockchart>
            </Box>
            <Box component={"div"} sx={ad}></Box>
        </Box>
    );
};

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1250,
            xl: 1536,
        },
    },
});

const wrapper = {
    margin: 0,
    [theme.breakpoints.up("lg")]: {
        padding: "48px 160px",
    },
    [theme.breakpoints.between("md", "lg")]: {
        padding: "48px 50px",
    },
    display: "flex",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        gap: "0 20px",
    },
    [theme.breakpoints.down("md")]: {
        padding: "48px 20px",
        flexDirection: "column",
        gap: "40px 0",
    },
    color: "#424242",
    bgcolor: "#ededed",
};

const main = {
    flexGrow: 1,
    height: "fit-content",
    margin: 0,
    padding: "40px",
    bgcolor: "white",
};

const ad = {
    height: "300px",
    width: "300px",
    bgcolor: "white",
    [theme.breakpoints.down("md")]: {
        margin: "0 auto",
    },
};
