import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";

interface SidenavRootProps {
    miniSidenav: boolean;
}

const SidenavRoot = styled(Drawer)((
    {
        miniSidenav,
    }: SidenavRootProps) => {
    const theme = useTheme();
    const darkMode = theme.palette.mode === "dark";

    const { palette, boxShadows, transitions, breakpoints, functions } = theme;

    const sidebarWidth = 250;
    const { gradients, background } = palette;
    const { xxl } = boxShadows;
    const { pxToRem, linearGradient } = functions;

    const backgroundValue = darkMode
        ? background.sidenav
        : linearGradient(gradients.dark.main, gradients.dark.state);

    // styles for the sidenav when miniSidenav={false}
    const drawerOpenStyles = () => ({
        background: backgroundValue,
        transform: "translateX(0)",
        transition: transitions.create("transform", {
            easing: transitions.easing.sharp,
            duration: transitions.duration.shorter,
        }),

        [breakpoints.up("xl")]: {
            boxShadow: xxl,
            marginBottom: "inherit",
            left: "0",
            width: sidebarWidth,
            transform: "translateX(0)",
            transition: transitions.create(["width", "background-color"], {
                easing: transitions.easing.sharp,
                duration: transitions.duration.enteringScreen,
            }),
        },
    });

    // styles for the sidenav when miniSidenav={true}
    const drawerCloseStyles = () => ({
        background: backgroundValue,
        transform: `translateX(${pxToRem(-320)})`,
        transition: transitions.create("transform", {
            easing: transitions.easing.sharp,
            duration: transitions.duration.shorter,
        }),

        [breakpoints.up("xl")]: {
            boxShadow: xxl,
            marginBottom: "inherit",
            left: "0",
            width: pxToRem(96),
            overflowX: "hidden",
            transform: "translateX(0)",
            transition: transitions.create(["width", "background-color"], {
                easing: transitions.easing.sharp,
                duration: transitions.duration.shorter,
            }),
        },
    });

    return {
        "& .MuiDrawer-paper": {
            boxShadow: xxl,
            border: "none",

            ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
        },
    };
});

export default SidenavRoot;
