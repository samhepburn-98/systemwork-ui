import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";

import ConfiguratorRoot from "./ConfiguratorRoot";

import { setMiniSidenav, setOpenConfigurator, useMaterialUIController, } from "src/context";
import useThemeMode from "src/hooks/useThemeMode";

const Configurator = () => {
    const [controller, dispatch] = useMaterialUIController();
    const {
        openConfigurator,
        miniSidenav,
    } = controller;

    const { themeMode, onToggleThemeMode } = useThemeMode();
    const darkMode = themeMode === "dark";

    const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
    const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

    const handleDarkMode = () => onToggleThemeMode();


    return (
        <ConfiguratorRoot variant="permanent" openConfigurator={openConfigurator}>
            <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
                pt={4}
                pb={0.5}
                px={3}
            >
                <MDBox>
                    <MDTypography variant="h5">Material UI Configurator</MDTypography>
                    <MDTypography variant="body2">
                        See our dashboard options.
                    </MDTypography>
                </MDBox>

                <Icon
                    sx={({ typography: { size }, palette: { dark, white } }) => ({
                        fontSize: `${size.lg} !important`,
                        color: darkMode ? white.main : dark.main,
                        stroke: "currentColor",
                        strokeWidth: "2px",
                        cursor: "pointer",
                        transform: "translateY(5px)",
                    })}
                    onClick={handleCloseConfigurator}
                >
                    close
                </Icon>
            </MDBox>

            <Divider/>

            <MDBox pt={0.5} pb={3} px={3}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
                    <MDTypography variant="h6">Sidenav Mini</MDTypography>

                    <Switch checked={miniSidenav} onChange={handleMiniSidenav}/>
                </MDBox>
                <Divider/>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
                    <MDTypography variant="h6">Light / Dark</MDTypography>

                    <Switch checked={darkMode} onChange={handleDarkMode}/>
                </MDBox>
            </MDBox>
        </ConfiguratorRoot>
    );
};

export default Configurator;
