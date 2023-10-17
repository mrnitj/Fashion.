import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useNavigate } from "react-router-dom";

export default function HamburgerBar() {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const login = () => {
        navigate("/login");
    };
    const join = () => {
        navigate("/join");
    };

    return (
        <Box>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                    color: "black",
                    transition: "scale 0.15s, color 0.15s",
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: "grey",
                        scale: "1.5",
                        transition: "scale 0.15s, color 0.15s",
                    },
                }}
                disableRipple
            >
                <MoreHorizIcon sx={{ fontSize: "3rem", letterSpacing: "1rem" }} />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
                <MenuItem
                    onClick={() => {
                        handleClose();
                        login();
                    }}
                >
                    Login
                </MenuItem>
                <MenuItem
                    sx={{ textAlign: "center" }}
                    onClick={() => {
                        handleClose();
                        join();
                    }}
                >
                    Join
                </MenuItem>
            </Menu>
        </Box>
    );
}
