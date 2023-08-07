import { Theme } from "@mui/material/styles";
import pxToRem from "../functions/pxToRem";

const LinearProgress = (theme: Theme) => {
    const { borderRadius } = theme.borders;
    const { light } = theme.palette;

    return ({
        styleOverrides: {
            root: {
                height: pxToRem(6),
                borderRadius: borderRadius.md,
                overflow: "visible",
                position: "relative" as const,
            },

            colorPrimary: {
                backgroundColor: light.main,
            },

            colorSecondary: {
                backgroundColor: light.main,
            },

            bar: {
                height: pxToRem(6),
                borderRadius: borderRadius.sm,
                position: "absolute" as const,
                transform: `translate(0, 0) !important`,
                transition: "width 0.6s ease !important",
            },
        },
    });
};

export default LinearProgress;
