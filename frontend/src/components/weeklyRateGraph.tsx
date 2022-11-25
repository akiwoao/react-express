import React, { Component } from "react";
import Box from "@mui/material/Box";

import CanvasJSReact from "../lib/canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function WeeklyRateGraph(props: any) {
    return (
        <Box component={"div"}>
            <CanvasJSChart
                options={{
                    theme: "light2",
                    data: [
                        {
                            type: "column",
                            dataPoints: props.weekly,
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
