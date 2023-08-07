import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Outlined = (theme: Theme) => {
    const { transparent, light, info, secondary } = theme.palette;
    const { size } = theme.typography;
    const isLight = theme.palette.mode === "light";

    return ({
        base: {
            minHeight: isLight ? pxToRem(40) : pxToRem(39),
            color: light.main,
            borderColor: light.main,
            padding: isLight ? `${pxToRem(10)} ${pxToRem(24)}` : `${pxToRem(9)} ${pxToRem(24)}`,

            "&:hover": {
                opacity: 0.75,
                backgroundColor: transparent.main,
            },

            "& .material-icon, .material-icons-round, svg": {
                fontSize: `${pxToRem(16)} !important`,
            },
        },

        small: {
            minHeight: isLight ? pxToRem(32) : pxToRem(31),
            padding: isLight ? `${pxToRem(6)} ${pxToRem(16)}` : `${pxToRem(6)} ${pxToRem(18)}`,
            fontSize: size.xs,

            "& .material-icon, .material-icons-round, svg": {
                fontSize: `${pxToRem(12)} !important`,
            },
        },

        large: {
            minHeight: isLight ? pxToRem(47) : pxToRem(46),
            padding: isLight ? `${pxToRem(12)} ${pxToRem(28)}` : `${pxToRem(12)} ${pxToRem(64)}`,
            fontSize: size.sm,

            "& .material-icon, .material-icons-round, svg": {
                fontSize: `${pxToRem(22)} !important`,
            },
        },

        primary: {
            backgroundColor: transparent.main,
            borderColor: info.main,

            "&:hover": {
                backgroundColor: transparent.main,
            },
        },

        secondary: {
            backgroundColor: transparent.main,
            borderColor: secondary.main,

            "&:hover": {
                backgroundColor: transparent.main,
            },
        },
    });
};

export default Outlined;
