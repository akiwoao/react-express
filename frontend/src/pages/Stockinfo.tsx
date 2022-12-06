import React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

//コンポーネントの追加
import StockChart from "../components/stockChart";
import MonthlyRateGraph from "../components/monthlyRateGraph";
import WeeklyRateGraph from "../components/weeklyRateGraph";

const stock_shape = (data: any) => {
    var prices = data.prices.map((data: any) => ({
        x: new Date(data.date),
        y: [
            parseFloat(data.open),
            parseFloat(data.high),
            parseFloat(data.low),
            parseFloat(data.close),
        ],
        color: data.open <= data.close ? "#4661EE" : "#FF4040",
    }));
    return prices;
};

const predict_shape = (data: any) => {
    let predicts_data: any = { monthly: [], weekly: [] };
    let month = [
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
    ];
    let week = [
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
        { total: 0, correct: 0 },
    ];
    data.predicts.forEach((data: any) => {
        let date = new Date(data.date);
        let month_number = date.getMonth();
        let week_number = date.getDay() - 1;
        month[month_number].total += 1;
        week[week_number].total += 1;
        if (data.propriety) {
            month[month_number].correct += 1;
            week[week_number].correct += 1;
        }
    });
    month.forEach((data, index) =>
        predicts_data.monthly.push({
            label: index + 1,
            y: (data.correct / data.total) * 100,
        })
    );
    week.forEach((data, index) =>
        predicts_data.weekly.push({
            label: index + 1,
            y: Math.round((data.correct / data.total) * 10000) / 100,
        })
    );
    return predicts_data;
};

export const StockInfo = () => {
    const { state } = useLocation();
    const data = state.state;
    const prices = stock_shape(data);
    const predicts = predict_shape(data);

    return (
        <Box component={"div"} sx={wrapper}>
            <Box component={"div"} sx={main}>
                <Box component={"div"} id={"stock_info"}>
                    <Box component={"div"}>{data.name}</Box>
                    <StockChart prices={prices}></StockChart>
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
                                <Box component={"td"}>本日の株価</Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-1)[0].open}
                                </Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-1)[0].high}
                                </Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-1)[0].low}
                                </Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-1)[0].close}
                                </Box>
                            </Box>
                            <Box component={"tr"}>
                                <Box component={"td"}>前日の株価</Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-2)[0].open}
                                </Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-2)[0].high}
                                </Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-2)[0].low}
                                </Box>
                                <Box component={"td"}>
                                    {data.prices.slice(-2)[0].close}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box component={"div"} id={"stock_predict"}>
                    <Box component={"div"}>予測データ</Box>
                    <Box component={"div"} sx={predict_charts}>
                        <MonthlyRateGraph
                            monthly={predicts.monthly}
                        ></MonthlyRateGraph>
                        <WeeklyRateGraph
                            weekly={predicts.weekly}
                        ></WeeklyRateGraph>
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
                                            data.predicts.slice(-1)[0]
                                                .up_down == "up"
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

const predict_charts = {
    display: "flex",
    "#canvasjs-react-chart-container-2": {
        height: "180px",
        width: "50%",
    },
};
