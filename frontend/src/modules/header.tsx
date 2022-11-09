import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Header() {
    return (
        <AppBar sx={header}>
            <Box component={Link} to="/">
                <img
                    src={logo}
                    alt="Stock Up Down"
                    height="48px"
                    width="auto"
                />
            </Box>
            <Box component={"nav"} sx={nav}>
                <Box component={"ul"} sx={nav_ul}>
                    <Box component={"li"}>
                        <Box component={Link} to="/" sx={page_link}>
                            TOP
                        </Box>
                    </Box>
                    <Box component={"li"}>
                        <Box component={Link} to="/stockpredict" sx={page_link}>
                            株価予測
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AppBar>
    );
}

const header = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0 160px",
    margin: 0,
    padding: "10px 0 4px 160px",
    bgcolor: "white",
    borderBottom: 1,
    boxShadow: 2,
};

const nav = {
    flexGrow: 1,
    height: "fit-content",
    alignSelf: "end",
};

const nav_ul = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0px 32px",
    margin: 0,
    padding: 0,
};

const page_link = {
    color: "#424242",
    textDecoration: "none",
    fontSize: "16px",
    "&:hover": {
        textDecoration: "underline",
    },
};
