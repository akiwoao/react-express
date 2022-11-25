import React, { Component } from "react";
import Box from "@mui/material/Box";

import CanvasJSReact from "../lib/canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function PredictChart(props: any) {
    return (
        <Box component={"div"}>
            <CanvasJSChart
                options={{
                    theme: "light2",
                    axisX: {
                        valueFormatString: "YYYY/MM/DD",
                    },
                    data: [
                        {
                            type: "spline",
                            yValueFormatString: "###0.00",
                            xValueFormatString: "YYYY/MM/DD",
                            dataPoints: props.predict,
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
