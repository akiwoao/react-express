import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

//コンポーネントの追加
import Indicator from "../components/indicator";

export const Home = () => {
    return (
        <Box component={"div"} sx={wrapper}>
            <Box component={"div"} sx={index}>
                <Box component={"div"} sx={{ fontSize: "14px" }}>
                    世界の指数
                </Box>
                <Box component={"ul"} sx={list_style}>
                    <Box component={"li"}>
                        <Indicator
                            country={"japan"}
                            security_code={30323}
                            stock_name={"日経平均株価"}
                            predict_rate={71.3}
                            predict_stock={"30,329.32"}
                            UpDown={1}
                        ></Indicator>
                    </Box>
                </Box>
            </Box>
            <Box component={"div"} sx={ad}></Box>
        </Box>
    );
};

const wrapper = {
    margin: 0,
    padding: "48px 160px",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: "0 20px",
    color: "#424242",
    bgcolor: "#ededed",
};

const index = {
    flexGrow: 1,
    height: "fit-content",
    margin: 0,
    padding: "40px",
    bgcolor: "white",
};

const ad = {
    height: "360px",
    width: "300px",
    bgcolor: "white",
};

const list_style = {
    margin: 0,
    padding: 0,
    listStyleType: "none",
};
