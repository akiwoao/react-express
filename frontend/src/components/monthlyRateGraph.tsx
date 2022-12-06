import React, { Component } from "react";
import Box from "@mui/material/Box";
import CanvasJSReact from "../lib/canvasjs.stock.react";

CanvasJSReact.CanvasJS.addColorSet("customColor", ["#4661EE"]);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function MonthlyRateGraph(props: any) {
    return (
        <Box component={"div"} sx={{ width: "50%" }}>
            <CanvasJSChart
                options={{
                    axisY: {
                        interval: 20,
                        minimum: 0,
                        maximum: 100,
                    },
                    colorSet: "customColor",
                    theme: "light2",
                    dataPointMaxWidth: 30,
                    height: 220,
                    data: [
                        {
                            type: "column",
                            dataPoints: props.monthly,
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
