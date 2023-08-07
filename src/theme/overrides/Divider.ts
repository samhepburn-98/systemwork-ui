import rgba from "../functions/rgba";
import pxToRem from "../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Divider = (theme: Theme) => {
    const { dark, transparent, white } = theme.palette;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                backgroundColor: transparent.main,
                backgroundImage: isLight
                    ? `linear-gradient(to right, ${rgba(dark.main, 0)}, ${rgba(dark.main, 0.4)}, ${rgba(dark.main, 0)}) !important`
                    : `linear-gradient(to right, ${rgba(dark.main, 0)}, ${white.main}, ${rgba(dark.main, 0)}) !important`,
                height: pxToRem(1),
                margin: `${pxToRem(16)} 0`,
                borderBottom: "none",
                opacity: 0.25,
            },

            vertical: {
                backgroundColor: transparent.main,
                backgroundImage: isLight
                    ? `linear-gradient(to bottom, ${rgba(dark.main, 0)}, ${rgba(dark.main, 0.4)}, ${rgba(dark.main, 0)}) !important`
                    : `linear-gradient(to bottom, ${rgba(dark.main, 0)}, ${white.main}, ${rgba(dark.main, 0)}) !important`,
                width: pxToRem(1),
                height: "100%",
                margin: `0 ${pxToRem(16)}`,
                borderRight: "none",
            },

            light: {
                backgroundColor: transparent.main,
                backgroundImage: isLight
                    ? `linear-gradient(to right, ${rgba(white.main, 0)}, ${white.main}, ${rgba(white.main, 0)}) !important`
                    : `linear-gradient(to right, ${rgba(white.main, 0)}, ${rgba(dark.main, 0.4)}, ${rgba(white.main, 0)}) !important`,

                "&.MuiDivider-vertical": {
                    backgroundImage: isLight
                        ? `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${white.main}, ${rgba(white.main, 0)}) !important`
                        : `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${rgba(dark.main, 0.4)}, ${rgba(white.main, 0)}) !important`,
                },
            },
        },
    })
        ;
};

export default Divider;
