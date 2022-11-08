import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Header() {
    return (
        <AppBar
            position="static"
            sx={{
                display: "flex",
                flexDirection: "row",
                padding: "8px 0 4px 160px",
                bgcolor: "white",
                borderBottom: 1,
                boxShadow: 2,
            }}
        >
            <Link to="/">
                <img
                    src={logo}
                    alt="Stock Up Down"
                    height="48px"
                    width="auto"
                />
            </Link>
            <Box component={"ul"}>
                <Box component={"li"}>
                    <Button variant="text" component={Link} to="/">
                        TOP
                    </Button>
                </Box>
                <Box component={"li"}>
                    <Button variant="text" component={Link} to="/stockpredict">
                        {"株価予測"}
                    </Button>
                </Box>
            </Box>
        </AppBar>
    );
}
