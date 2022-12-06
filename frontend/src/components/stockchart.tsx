import React, { Component } from "react";
import Box from "@mui/material/Box";
import CanvasJSReact from "../lib/canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StockChart(props: any) {
    return (
        <Box component={"div"}>
            <CanvasJSChart
                options={{
                    theme: "light2",
                    axisX: {
                        valueFormatString: "YYYY/MM/DD",
                    },
                    height: 360,
                    data: [
                        {
                            type: "candlestick",
                            risingColor: "#4661EE",
                            fallingColor: "#FF4040",
                            yValueFormatString: "###0.00",
                            xValueFormatString: "YYYY/MM/DD",
                            dataPoints: props.prices,
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
