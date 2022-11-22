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
    const data = test.data[parseInt(params.get("index")!)];
    const stocks = data.stocks.map((stock) => ({
        x: new Date(stock.date),
        y: [stock.open, stock.high, stock.low, stock.close],
    }));
    return (
        <Box component={"div"} sx={wrapper}>
            <Box component={"div"} sx={main}>
                <Stockchart name={data.name} stocks={stocks}></Stockchart>
                <Box component={"table"} sx={stock_table}>
                    <Box component={"thead"}>
                        <Box component={"tr"}>
                            <Box component={"th"}></Box>
                            <Box component={"th"}>始値</Box>
                            <Box component={"th"}>高値</Box>
                            <Box component={"th"}>安値</Box>
                            <Box component={"th"}>終値</Box>
                        </Box>
                    </Box>
                    <Box component={"tbody"}>
                        <Box component={"tr"}>
                            <Box component={"td"}>前日の株価</Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-2)[0].open}
                            </Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-2)[0].high}
                            </Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-2)[0].low}
                            </Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-2)[0].close}
                            </Box>
                        </Box>
                        <Box component={"tr"}>
                            <Box component={"td"}>本日の株価</Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-1)[0].open}
                            </Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-1)[0].high}
                            </Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-1)[0].low}
                            </Box>
                            <Box component={"td"}>
                                {data.stocks.slice(-1)[0].close}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box component={"table"} sx={predict_table}>
                    <Box component={"thead"}>
                        <Box component={"tr"}>
                            <Box component={"th"}></Box>
                            <Box component={"th"}>始値の予測</Box>
                            <Box component={"th"}>上昇or下降</Box>
                        </Box>
                    </Box>
                    <Box component={"tbody"}>
                        <Box component={"tr"}>
                            <Box component={"td"}>明日の予測</Box>
                            <Box component={"td"}>
                                {data.predicts.slice(-1)[0].predict}
                            </Box>
                            <Box component={"td"}>
                                {(() => {
                                    if (
                                        data.predicts.slice(-1)[0].up_down ==
                                        "up"
                                    ) {
                                        return "上昇";
                                    } else {
                                        return "下降";
                                    }
                                })()}
                            </Box>
                        </Box>
                    </Box>
                </Box>
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

const stock_table = {
    width: "100%",
    marginTop: "20px",
    textAlign: "center",
    borderCollapse: "collapse",
    "tbody > tr": {
        borderTop: 1,
        borderColor: "#bbbbbb",
    },
    "th:first-of-type, td:first-of-type": {
        fontWeight: "bold",
        borderRight: 1,
        borderColor: "#bbbbbb",
    },
    "th, td": {
        height: "30px",
        width: "calc(100% / 5)",
    },
};

const predict_table = {
    width: "60%",
    marginTop: "24px",
    textAlign: "center",
    borderCollapse: "collapse",
    "tbody > tr": {
        borderTop: 1,
        borderColor: "#bbbbbb",
    },
    "th:first-of-type, td:first-of-type": {
        fontWeight: "bold",
        borderRight: 1,
        borderColor: "#bbbbbb",
    },
    "th, td": {
        height: "30px",
        width: "calc(100% / 3)",
    },
};
