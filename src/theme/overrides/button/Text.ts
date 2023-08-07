import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const ButtonText = (theme: Theme) => {
    const { text, info, secondary, transparent } = theme.palette;
    const { size } = theme.typography;
    const isLight = theme.palette.mode === "light";

    return ({
        base: {
            backgroundColor: transparent.main,
            minHeight: isLight ? pxToRem(40) : pxToRem(37),
            color: text.main,
            boxShadow: "none",
            padding: isLight ? `${pxToRem(10)} ${pxToRem(24)}` : `${pxToRem(9)} ${pxToRem(24)}`,

            "&:hover": {
                backgroundColor: transparent.main,
                boxShadow: "none",
            },

            "&:focus": {
                boxShadow: "none",
            },

            "&:active, &:active:focus, &:active:hover": {
                opacity: 0.85,
                boxShadow: "none",
            },

            "&:disabled": {
                boxShadow: "none",
            },

            "& .material-icon, .material-icons-round, svg": {
                fontSize: `${pxToRem(16)} !important`,
            },
        },

        small: {
            minHeight: isLight ? pxToRem(32) : pxToRem(29),
            padding: isLight ? `${pxToRem(6)} ${pxToRem(16)}` : `${pxToRem(6)} ${pxToRem(18)}`,
            fontSize: size.xs,

            "& .material-icon, .material-icons-round, svg": {
                fontSize: `${pxToRem(12)} !important`,
            },
        },

        large: {
            minHeight: isLight ? pxToRem(47) : pxToRem(44),
            padding: isLight ? `${pxToRem(12)} ${pxToRem(28)}` : `${pxToRem(12)} ${pxToRem(64)}`,
            fontSize: size.sm,

            "& .material-icon, .material-icons-round, svg": {
                fontSize: `${pxToRem(22)} !important`,
            },
        },

        primary: {
            color: info.main,

            "&:hover": {
                color: info.main,
            },

            "&:focus:not(:hover)": {
                color: info.focus,
                boxShadow: "none",
            },
        },

        secondary: {
            color: secondary.main,

            "&:hover": {
                color: secondary.main,
            },

            "&:focus:not(:hover)": {
                color: secondary.focus,
                boxShadow: "none",
            },
        },
    });
};

export default ButtonText;
