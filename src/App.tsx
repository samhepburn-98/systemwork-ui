import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";

import Sidenav from "src/examples/Sidenav";
import Configurator from "src/examples/Configurator";

import routes from "src/routes/routes";

import { setMiniSidenav, setOpenConfigurator, useMaterialUIController } from "src/context";

import brandWhite from "src/assets/images/logo-ct.png";
import MuiThemeProvider from "src/theme/MuiThemeProvider.tsx";

const App = () => {
    const [controller, dispatch] = useMaterialUIController();
    const {
        miniSidenav,
        layout,
        openConfigurator
    } = controller;

    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const { pathname } = useLocation();

    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            setMiniSidenav(dispatch, false);
            setOnMouseEnter(true);
        }
    };

    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSidenav(dispatch, true);
            setOnMouseEnter(false);
        }
    };

    // Change the openConfigurator state
    const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const configsButton = (
        <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="3.25rem"
            height="3.25rem"
            bgColor="white"
            shadow="sm"
            borderRadius="50%"
            position="fixed"
            right="2rem"
            bottom="2rem"
            zIndex={99}
            color="dark"
            sx={{ cursor: "pointer" }}
            onClick={handleConfiguratorOpen}
        >
            <Icon fontSize="small" color="inherit">
                settings
            </Icon>
        </MDBox>
    );

    return (
        <MuiThemeProvider>
            <CssBaseline/>
            {layout === "dashboard" && (
                <>
                    <Sidenav
                        brand={brandWhite}
                        brandName="Systemwork"
                        routes={routes}
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    />
                    <Configurator/>
                    {configsButton}
                </>
            )}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            {layout === "vr" && <Configurator/>}
            <Outlet/>
        </MuiThemeProvider>
    );
};

export default App;
