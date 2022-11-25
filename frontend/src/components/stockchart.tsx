import React, { Component } from "react";
import Box from "@mui/material/Box";

import CanvasJSReact from "../lib/canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StockChart(props: any) {
    const options = {
        theme: "light2",
        axisX: {
            valueFormatString: "YYYY/MM/DD",
        },
        data: [
            {
                type: "candlestick",
                yValueFormatString: "###0.00",
                xValueFormatString: "YYYY/MM/DD",
                dataPoints: props.stocks,
            },
        ],
    };
    return (
        <Box component={"div"}>
            <CanvasJSChart options={options}></CanvasJSChart>
        </Box>
    );
}
