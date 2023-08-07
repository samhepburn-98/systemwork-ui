import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";

interface ConfiguratorRootProps {
    openConfigurator: boolean;
}

const ConfiguratorRoot = styled(Drawer)(({ openConfigurator }: ConfiguratorRootProps) => {
    const theme = useTheme();
    const { boxShadows, functions, transitions } = theme;

    const configuratorWidth = 360;
    const { lg } = boxShadows;
    const { pxToRem } = functions;

    // drawer styles when openConfigurator={true}
    const drawerOpenStyles = () => ({
        width: configuratorWidth,
        left: "initial",
        right: 0,
        transition: transitions.create("right", {
            easing: transitions.easing.sharp,
            duration: transitions.duration.short,
        }),
    });

    // drawer styles when openConfigurator={false}
    const drawerCloseStyles = () => ({
        left: "initial",
        right: pxToRem(-350),
        transition: transitions.create("all", {
            easing: transitions.easing.sharp,
            duration: transitions.duration.short,
        }),
    });

    return {
        "& .MuiDrawer-paper": {
            height: "100vh",
            margin: 0,
            padding: `0 ${pxToRem(10)}`,
            borderRadius: 0,
            boxShadow: lg,
            overflowY: "auto",
            ...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
        },
    };
});

export default ConfiguratorRoot;
