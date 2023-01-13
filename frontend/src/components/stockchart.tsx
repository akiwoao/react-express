import React, { Component } from "react";
import Box from "@mui/material/Box";
import CanvasJSReact from "../lib/canvasjs.stock.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const make_prices_data = (data: any) => {
    var prices = data.map((data: any) => ({
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
                            dataPoints: make_prices_data(props.prices),
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
