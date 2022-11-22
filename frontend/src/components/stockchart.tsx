import React, { Component } from "react";
import Box from "@mui/material/Box";
import Chart from "react-apexcharts";

import CanvasJSReact from "../lib/canvasjs.stock.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StockChart(props: any) {
    return (
        <Box component={"div"}>
            <CanvasJSChart
                options={{
                    theme: "light2",
                    title: {
                        text: props.name,
                    },
                    axisX: {
                        valueFormatString: "YYYY/MM/DD",
                    },
                    data: [
                        {
                            type: "candlestick",
                            showInLegend: true,
                            name: props.name,
                            yValueFormatString: "###0.00",
                            xValueFormatString: "YYYY/MM/DD",
                            dataPoints: props.stocks,
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}

// export default function StockChart(props: any) {
//     return (
//         <Box component={"div"}>
//             <Chart
//                 options={{
//                     chart: {
//                         type: "candlestick",
//                         height: 350,
//                     },
//                     title: {
//                         text: "CandleStick Chart",
//                         align: "left",
//                     },
//                     xaxis: {
//                         type: "datetime",
//                     },
//                     yaxis: {
//                         tooltip: {
//                             enabled: true,
//                         },
//                     },
//                 }}
//                 series={[
//                     {
//                         data: props.stocks,
//                     },
//                 ]}
//                 type="candlestick"
//             ></Chart>
//         </Box>
//     );
// }
