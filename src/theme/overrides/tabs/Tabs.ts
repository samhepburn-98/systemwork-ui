import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Tabs = (theme: Theme) => {
    const { background, grey, white } = theme.palette;
    const { borderRadius } = theme.borders;
    const { tabsBoxShadow, md } = theme.boxShadows;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                position: "relative" as const,
                backgroundColor: isLight ? grey[100] : background.paper,
                borderRadius: borderRadius.xl,
                minHeight: "unset",
                padding: pxToRem(4),
            },

            flexContainer: {
                height: "100%",
                position: "relative" as const,
                zIndex: 10,
            },

            fixed: {
                overflow: "unset !important",
                overflowX: "unset !important" as never,
            },

            vertical: {
                "& .MuiTabs-indicator": {
                    width: "100%",
                },
            },

            indicator: {
                height: "100%",
                borderRadius: borderRadius.lg,
                backgroundColor: isLight ? white.main : background.default,
                boxShadow: isLight ? tabsBoxShadow.indicator : md,
                transition: "all 500ms ease",
            },
        },
    });
};

export default Tabs;
