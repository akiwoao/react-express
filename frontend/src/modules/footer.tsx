import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Box component={"footer"} sx={footer}>
            <Box component={"div"} sx={sitemap}>
                <Box component={Link} to="/" sx={footer_logo}>
                    <Box component={"div"} id={"title"}>
                        Stock Up Down
                    </Box>
                    <Box component={"div"} id={"subtitle"}>
                        機械学習による株価予測サービス
                    </Box>
                </Box>
                <Box component={"nav"}>
                    <Box component={"ul"} sx={list}>
                        <Box component={"li"} sx={list_title}>
                            SITEMAP
                            <Box component={"ul"} sx={list}>
                                <Box component={"li"} id={"link"}>
                                    <Box component={Link} to="/" sx={page_link}>
                                        TOP
                                    </Box>
                                </Box>
                                <Box component={"li"} id={"link"}>
                                    <Box
                                        component={Link}
                                        to="/stockpredict"
                                        sx={page_link}
                                    >
                                        株価予測
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component={"div"} sx={copyright}>
                <Box component={"small"}>
                    ©2022 AST Project. No Rights Reserved
                </Box>
            </Box>
        </Box>
    );
}

const footer = {
    bgcolor: "#424242",
    color: "#ffffff",
    margin: 0,
    padding: 0,
};

const sitemap = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "nowrap",
    gap: { xs: "0 32px", sm: "0 100px", md: "0 160px" },
    margin: 0,
    padding: {
        xs: "28px 16px",
        sm: "32px 50px",
        md: "32px 160px",
    },
};

const footer_logo = {
    margin: { xs: "0 auto", sm: "0" },
    padding: { xs: "0 0 24px 0" },
    height: "fit-content",
    width: "fit-content",
    color: "#ffffff",
    textDecoration: "none",
    "> #title": {
        fontSize: { xs: "24px", sm: "32px" },
        fontWeight: "bold",
        lineHeight: 1,
    },
    "> #subtitle": {
        fontSize: { xs: "8px", sm: "12px" },
    },
};

const list_title = {
    paddingBottom: "4px",
    textAlign: { xs: "center", sm: "left" },
    fontWeight: "bold",
    fontSize: { xs: "16px", sm: "20px" },
};

const list = {
    margin: { xs: "0 auto" },
    padding: 0,
    height: "fit-content",
    width: "fit-content",
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    gap: "0 48px",
    listStyleType: "none",
    fontWeight: "bold",
    fontSize: { xs: "16px", sm: "20px" },
    "> #link": {
        paddingTop: "8px",
    },
};

const page_link = {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "normal",
    fontSize: { xs: "12px", sm: "16px" },
    "&:hover": {
        textDecoration: "underline",
    },
};

const copyright = {
    borderTop: 1,
    borderColor: "#ffffff",
    textAlign: "center",
    fontSize: { xs: "x-small", sm: "small" },
};
