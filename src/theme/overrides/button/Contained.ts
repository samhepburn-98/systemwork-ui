import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Contained = (theme: Theme) => {
    const { white, text, info, secondary } = theme.palette;
    const { size } = theme.typography;
    const isLight = theme.palette.mode === "light";

    return ({
        base: {
            backgroundColor: white.main,
            minHeight: isLight ? pxToRem(40) : pxToRem(37),
            color: text.main,
            padding: isLight ? `${pxToRem(10)} ${pxToRem(24)}` : `${pxToRem(9)} ${pxToRem(24)}`,

            "&:hover": {
                backgroundColor: white.main,
            },

            "&:active, &:active:focus, &:active:hover": {
                opacity: 0.85,
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
            backgroundColor: info.main,

            "&:hover": {
                backgroundColor: info.main,
            },

            "&:focus:not(:hover)": {
                backgroundColor: info.focus,
            },
        },

        secondary: {
            backgroundColor: secondary.main,

            "&:hover": {
                backgroundColor: secondary.main,
            },

            "&:focus:not(:hover)": {
                backgroundColor: secondary.focus,
            },
        },
    });
};

export default Contained;
