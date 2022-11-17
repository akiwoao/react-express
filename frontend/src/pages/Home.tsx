import React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

//コンポーネントの追加
import Indicator from "../components/indicator";
import Column from "../components/column";

//テストデータの追加
import test from "../test.json";

export const Home = () => {
    return (
        <Box component={"div"} sx={wrapper}>
            <Box component={"div"} sx={main}>
                <Box component={"div"}>世界の指数</Box>
                <Box component={"ul"} sx={list_style}>
                    <Box component={"li"}>
                        <Column></Column>
                    </Box>
                    {test.data.map((data, index) => {
                        return (
                            <Box component={"li"} key={data.id}>
                                <Indicator
                                    index={index}
                                    country={data.country}
                                    code={data.code}
                                    name={data.name}
                                    upDown={data.upDown}
                                    predict={data.predict}
                                    rate={(data.rate * 100).toFixed(2)}
                                ></Indicator>
                            </Box>
                        );
                    })}
                    <Box component={"li"}>
                        <Indicator
                            country={"japan"}
                            code={"0000"}
                            name={"日経平均株価"}
                            upDown={1}
                            predict={"30,329.32"}
                            rate={71.3}
                        ></Indicator>
                    </Box>
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
