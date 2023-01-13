import React, { Component } from "react";
import Box from "@mui/material/Box";
import CanvasJSReact from "../lib/canvasjs.stock.react";

CanvasJSReact.CanvasJS.addColorSet("customColor", ["#4661EE"]);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const make_predicts_data = (data: any) => {
    var predicts = data.map((data: any) => ({
        x: new Date(data.date),
        y: parseFloat(data.predict),
    }));
    return predicts;
};

export default function PredictChart(props: any) {
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
                            type: "line",
                            yValueFormatString: "###0.00",
                            xValueFormatString: "YYYY/MM/DD",
                            dataPoints: make_predicts_data(props.predicts),
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
