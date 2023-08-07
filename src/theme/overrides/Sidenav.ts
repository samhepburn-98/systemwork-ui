import { Theme } from "@mui/material/styles";
import pxToRem from "../functions/pxToRem";

const sidenav = (theme: Theme) => {
    const { background, white } = theme.palette;
    const { borderRadius } = theme.borders;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                width: pxToRem(250),
                whiteSpace: "nowrap" as const,
                border: "none",
            },

            paper: {
                width: pxToRem(250),
                backgroundColor: isLight ? white.main : background.sidenav,
                height: `calc(100vh - ${pxToRem(32)})`,
                margin: pxToRem(16),
                borderRadius: borderRadius.xl,
                border: "none",
            },

            paperAnchorDockedLeft: {
                borderRight: "none",
            },
        },
    });
};

export default sidenav;
