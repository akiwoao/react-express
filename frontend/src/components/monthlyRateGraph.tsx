import React, { Component } from "react";
import Box from "@mui/material/Box";
import CanvasJSReact from "../lib/canvasjs.stock.react";

CanvasJSReact.CanvasJS.addColorSet("customColor", ["#4661EE"]);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const make_monthly_rate = (data: any) => {
    var monthly_rate = [];
    // 月ごとの集計データ
    var first: number = new Date(data[0].date).getMonth();
    var last: number = new Date(data.slice(-1)[0].date).getMonth() + 1;
    if (first > last) {
        last = first + (12 - first) + last;
    }
    for (var i = 0; i < last - first; i++) {
        var month = (first + i) % 12;
        var month_count: number = data.filter(
            (predict: any) => new Date(predict.date).getMonth() == month
        ).length;
        var true_count: number = data.filter(
            (predict: any) =>
                new Date(predict.date).getMonth() == month &&
                predict.propriety == true
        ).length;
        monthly_rate.push({
            label: month + 1 + "月",
            y: Math.round((true_count / month_count) * 10000) / 100,
        });
    }
    return monthly_rate;
};

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
                            indexLabel: "{y}%",
                            dataPoints: make_monthly_rate(props.predicts),
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
