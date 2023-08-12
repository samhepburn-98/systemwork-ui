import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";
import MDInput from "src/mui-components/MDInput";

import { navbar, navbarContainer, navbarDesktopMenu, navbarIconButton, navbarMobileMenu, navbarRow, } from "./styles";

import { setMiniSidenav, setOpenConfigurator, setTransparentNavbar, useMaterialUIController, } from "src/context";
import { useTheme } from "@mui/material/styles";
import { Palette } from "@mui/material";

// Declaring prop types for DashboardNavbar
interface DashboardNavbarProps {
    absolute?: boolean;
    light?: boolean;
    isMini?: boolean;
}

const DashboardNavbar = ({ absolute, light, isMini }: DashboardNavbarProps) => {
    const [navbarType, setNavbarType] = useState<
        "fixed" | "absolute" | "relative" | "static" | "sticky"
    >();
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentNavbar, openConfigurator } = controller;

    const theme = useTheme();
    const darkMode = theme.palette.mode === "dark";

    useEffect(() => {
        // Setting the navbar type
        setNavbarType("sticky");

        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {
            setTransparentNavbar(dispatch, window.scrollY === 0);
        }

        /**
         The event listener that's calling the handleTransparentNavbar function when
         scrolling the window.
         */
        window.addEventListener("scroll", handleTransparentNavbar);

        // Call the handleTransparentNavbar function to set the state with the initial value.
        handleTransparentNavbar();

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleTransparentNavbar);
    }, [dispatch]);

    const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
    const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

    // Styles for the navbar icons
    const iconsStyle = ({
                            palette: { dark, white, text },
                            functions: { rgba },
                        }: {
        palette: Palette;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        functions: any;
    }) => ({
        color: () => {
            let colorValue = light || darkMode ? white.main : dark.main;

            if (transparentNavbar && !light) {
                colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
            }

            return colorValue;
        },
    });

    return (
        <AppBar
            position={absolute ? "absolute" : navbarType}
            color="inherit"
            sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
        >
            <Toolbar sx={navbarContainer}>
                <MDBox mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
                    {/*<Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light}/>*/}
                    <IconButton sx={navbarDesktopMenu} onClick={handleMiniSidenav} size="small" disableRipple>
                        <Icon fontSize="medium" sx={iconsStyle}>
                            {miniSidenav ? "menu_open" : "menu"}
                        </Icon>
                    </IconButton>
                </MDBox>
                {isMini ? null : (
                    <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
                        <MDBox pr={1}>
                            <MDInput label="Search here"/>
                        </MDBox>
                        <MDBox sx={{ color: light ? "white" : "inherit" }}>
                            <Link to="/authentication/sign-in/basic">
                                <IconButton sx={navbarIconButton} size="small" disableRipple>
                                    <Icon sx={iconsStyle}>account_circle</Icon>
                                </IconButton>
                            </Link>
                            <IconButton
                                size="small"
                                disableRipple
                                color="inherit"
                                sx={navbarMobileMenu}
                                onClick={handleMiniSidenav}
                            >
                                <Icon sx={iconsStyle} fontSize="medium">
                                    {miniSidenav ? "menu_open" : "menu"}
                                </Icon>
                            </IconButton>
                            <IconButton
                                size="small"
                                disableRipple
                                color="inherit"
                                sx={navbarIconButton}
                                onClick={handleConfiguratorOpen}
                            >
                                <Icon sx={iconsStyle}>settings</Icon>
                            </IconButton>
                        </MDBox>
                    </MDBox>
                )}
            </Toolbar>
        </AppBar>
    );
};

// Declaring default props for DashboardNavbar
DashboardNavbar.defaultProps = {
    absolute: false,
    light: false,
    isMini: false,
};

export default DashboardNavbar;
