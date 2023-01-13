import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Indicator(props: any) {
    const data: any = props.data;
    console.log(data.next_predict[0].up_down);
    return (
        <Box component={"div"} sx={wrapper}>
            <Box
                component={Link}
                to={`/stockinfo/?index=${data.id}`}
                state={{ state: data }}
                sx={link_style}
            >
                <Box component={"div"} sx={stock_name}>
                    <Box component={"div"} sx={flag_img}>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/${data.country}.svg`}
                            alt={data.country}
                            height="100%"
                            width="100%"
                        />
                    </Box>
                    <Box component={"div"}>{data.name}</Box>
                </Box>
                <Box component={"div"} sx={up_down}>
                    <Box
                        component={"div"}
                        id={
                            data.next_predict[0].up_down == "up" ? "up" : "down"
                        }
                    >
                        {data.next_predict[0].up_down == "up" ? "↑" : "↓"}
                    </Box>
                </Box>
                <Box component={"div"} sx={predict}>
                    {data.next_predict[0].predict}
                </Box>
                <Box component={"div"} sx={rate}>{`${data.rate}%`}</Box>
            </Box>
        </Box>
    );
}

const wrapper = {
    margin: 0,
    padding: "16px 8px",
    color: "#424242",
    borderBottom: 1,
    borderColor: "#aaaaaa",
};

const link_style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "0 32px",
    alignItems: "center",
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
        opacity: "0.7",
    },
};

const flag_img = {
    height: "20px",
    width: "auto",
    border: 1,
    borderColor: "#aaaaaa",
};

const stock_name = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "0 6px",
    alignItems: "center",
    color: "#0059b3",
    fontSize: "18px",
    fontWeight: "bold",
};

const up_down = {
    flexShrink: 0,
    width: "60px",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "sans",
    "> #up": {
        color: "#65BFF1",
    },
    "> #down": {
        color: "#FF4040",
    },
};

const predict = {
    flexShrink: 0,
    width: "80px",
    textAlign: "center",
    fontWeight: "bold",
};

const rate = {
    flexShrink: 0,
    width: "50px",
    textAlign: "center",
    fontSize: "15px",
};
