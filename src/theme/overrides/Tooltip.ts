import Fade from "@mui/material/Fade";

import pxToRem from "../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Tooltip = (theme: Theme) => {
    const { black, light, white } = theme.palette;
    const { borderRadius } = theme.borders;
    const { fontWeightRegular, size,  } = theme.typography;
    const isLight = theme.palette.mode === "light";

    return ({
        defaultProps: {
            arrow: true,
            TransitionComponent: Fade,
        },

        styleOverrides: {
            tooltip: {
                maxWidth: pxToRem(200),
                backgroundColor: black.main,
                color: isLight ? light.main : white.main,
                fontSize: size.sm,
                fontWeight: fontWeightRegular,
                textAlign: "center" as const,
                borderRadius: borderRadius.md,
                opacity: 0.7,
                padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
            },

            arrow: {
                color: black.main,
            },
        },
    });
};

export default Tooltip;
