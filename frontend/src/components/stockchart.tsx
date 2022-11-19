import React, { Component } from "react";
import Box from "@mui/material/Box";
import Chart from "react-apexcharts";

export default function StockChart(props: any) {
    const data = JSON.stringify(props.data);
    const series = [{ data }];
    const options = {
        chart: {
            type: "candlestick",
            height: 350,
        },
        title: {
            text: "CandleStick Chart",
            align: "left",
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
    };
    return (
        <Box component={"div"}>
            <Chart
                options={{
                    chart: {
                        type: "candlestick",
                        height: 350,
                    },
                    title: {
                        text: "CandleStick Chart",
                        align: "left",
                    },
                    xaxis: {
                        type: "datetime",
                    },
                    yaxis: {
                        tooltip: {
                            enabled: true,
                        },
                    },
                }}
                series={[
                    {
                        data: props.data,
                    },
                ]}
                type="candlestick"
            ></Chart>
        </Box>
    );
}
