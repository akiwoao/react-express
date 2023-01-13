import React, { Component } from "react";
import Box from "@mui/material/Box";
import CanvasJSReact from "../lib/canvasjs.stock.react";

CanvasJSReact.CanvasJS.addColorSet("customColor", ["#4661EE"]);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const make_weekly_rate = (data: any) => {
    var weekly_rate = [];
    var dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    // 週ごとの集計データ
    for (var i = 1; i <= 5; i++) {
        var week_count: number = data.filter(
            (predict: any) => new Date(predict.date).getDay() == i
        ).length;
        var true_count: number = data.filter(
            (predict: any) =>
                new Date(predict.date).getDay() == i &&
                predict.propriety == true
        ).length;
        weekly_rate.push({
            label: dayOfWeek[i] + "曜",
            y: Math.round((true_count / week_count) * 10000) / 100,
        });
    }
    console.log(weekly_rate);
    return weekly_rate;
};

export default function WeeklyRateGraph(props: any) {
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
                            dataPoints: make_weekly_rate(props.predicts),
                        },
                    ],
                }}
            ></CanvasJSChart>
        </Box>
    );
}
