import React, { Component } from "react";
import Box from "@mui/material/Box";
import Chart from "react-apexcharts";

export default function StockChart(props: any) {
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
                        data: props.stocks,
                    },
                ]}
                type="candlestick"
            ></Chart>
        </Box>
    );
}
