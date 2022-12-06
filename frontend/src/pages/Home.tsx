import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

//コンポーネントの追加
import Indicator from "../components/indicator";
import Column from "../components/column";

export const Home = () => {
    const [posts, setPosts] = useState<any>([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/stocks/")
            .then((response) => {
                response.data.map((data: any) => {
                    var true_count: number = data.predicts.filter(
                        (predict: any) => predict.propriety === true
                    ).length;
                    var rate: number = true_count / data.predicts.length;
                    data.rate = Math.round(rate * 10000) / 100;
                });
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    }, []);

    return (
        <Box component={"div"} sx={wrapper}>
            <Box component={"div"} sx={main}>
                <Box component={"div"}>世界の指数</Box>
                <Box component={"ul"} sx={list_style}>
                    <Box component={"li"}>
                        <Column></Column>
                    </Box>
                    {posts.map((data: any, index: number) => {
                        return (
                            <Box component={"li"} key={data.id}>
                                <Indicator data={data}></Indicator>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <Box component={"div"} sx={ad}></Box>
        </Box>
    );
};

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1250,
            xl: 1536,
        },
    },
});

const wrapper = {
    margin: 0,
    [theme.breakpoints.up("lg")]: {
        padding: "48px 160px",
    },
    [theme.breakpoints.between("md", "lg")]: {
        padding: "48px 50px",
    },
    display: "flex",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        gap: "0 20px",
    },
    [theme.breakpoints.down("md")]: {
        padding: "48px 20px",
        flexDirection: "column",
        gap: "40px 0",
    },
    color: "#424242",
    bgcolor: "#ededed",
};

const main = {
    flexGrow: 1,
    height: "fit-content",
    margin: 0,
    padding: "40px",
    bgcolor: "white",
};

const ad = {
    height: "300px",
    width: "300px",
    bgcolor: "white",
    [theme.breakpoints.down("md")]: {
        margin: "0 auto",
    },
};

const list_style = {
    margin: 0,
    padding: 0,
    listStyleType: "none",
};
