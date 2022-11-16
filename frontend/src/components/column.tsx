import React from "react";
import Box from "@mui/material/Box";

export default function Column() {
    return (
        <Box component={"div"} sx={wrapper}>
            <Box component={"div"} sx={{ flexGrow: 1 }}>
                経済指標
            </Box>
            <Box component={"div"} sx={updown_column}>
                明日の予想
            </Box>
            <Box component={"div"} sx={predict_column}>
                予測株価
            </Box>
            <Box component={"div"} sx={rate_column}>
                予測率
            </Box>
        </Box>
    );
}

const wrapper = {
    margin: 0,
    padding: "32px 8px 8px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "0 32px",
    alignItems: "center",
    color: "#999999",
    fontSize: "12px",
};

const updown_column = {
    flexShrink: 0,
    width: "60px",
    textAlign: "center",
};

const predict_column = {
    flexShrink: 0,
    width: "80px",
    textAlign: "center",
};

const rate_column = {
    flexShrink: 0,
    width: "50px",
    textAlign: "center",
};
