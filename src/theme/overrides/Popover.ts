import pxToRem from "../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Popover = (theme: Theme) => {
    const { transparent } = theme.palette;
    const { lg } = theme.boxShadows;
    const { borderRadius } = theme.borders;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            paper: {
                backgroundColor: transparent.main,
                boxShadow: lg,
                padding: isLight ? pxToRem(8) : undefined,
                borderRadius: borderRadius.md,
            },
        },
    });
};

export default Popover;
