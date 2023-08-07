import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Menu = (theme: Theme) => {
    const { lg, md } = theme.boxShadows;
    const { size } = theme.typography;
    const { background, text, white } = theme.palette;
    const { borderRadius } = theme.borders;
    const isLight = theme.palette.mode === "light";

    return ({
        defaultProps: {
            disableAutoFocusItem: true,
        },

        styleOverrides: {
            paper: {
                minWidth: pxToRem(160),
                boxShadow: isLight ? lg : md,
                padding: `${pxToRem(16)} ${pxToRem(8)}`,
                fontSize: size.sm,
                color: text.main,
                textAlign: "left" as const,
                backgroundColor: isLight ? `${white} !important` : `${background.paper} !important`,
                borderRadius: borderRadius.md,
            },
        },
    });
};

export default Menu;
