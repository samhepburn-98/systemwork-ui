import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Root = (theme: Theme) => {
    const { fontWeightBold, size } = theme.typography;
    const { borderRadius } = theme.borders;

    return ({
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: size.xs,
        fontWeight: fontWeightBold,
        borderRadius: borderRadius.lg,
        padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
        lineHeight: 1.4,
        textAlign: "center" as const,
        textTransform: "uppercase" as const,
        userSelect: "none" as const,
        backgroundSize: "150% !important",
        backgroundPositionX: "25% !important",
        transition: "all 150ms ease-in",

        "&:disabled": {
            pointerEvent: "none",
            opacity: 0.65,
        },

        "& .material-icons": {
            fontSize: pxToRem(15),
            marginTop: pxToRem(-2),
        },
    });
};

export default Root;
