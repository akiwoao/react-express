import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Header() {
    return (
        <Box component={"header"} sx={header}>
            <Box component={Link} to="/" sx={logo_img}>
                <img
                    src={logo}
                    alt="Stock Up Down"
                    height="100%"
                    width="100%"
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
        </Box>
    );
}

const header = {
    position: "sticky",
    top: 0,
    zIndex: 999,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: { xs: "0 24px", sm: "0 100px", md: "0 160px" },
    margin: 0,
    padding: {
        xs: "10px 0 4px 16px",
        sm: "10px 0 4px 50px",
        md: "10px 0 4px 160px",
    },
    bgcolor: "white",
    borderBottom: 1,
    boxShadow: 2,
    fontFamily: "Inter",
};

const logo_img = {
    height: { xs: "36px", sm: "48px" },
    width: "auto",
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
    gap: { xs: "0 12px", sm: "0 32px" },
    margin: 0,
    padding: 0,
    listStyleType: "none",
};

const page_link = {
    color: "#424242",
    textDecoration: "none",
    fontSize: { xs: "12px", sm: "16px" },
    "&:hover": {
        textDecoration: "underline",
    },
};
