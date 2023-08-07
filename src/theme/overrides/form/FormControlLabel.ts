import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const FormControlLabel = (theme: Theme) => {
    const { dark, white } = theme.palette;
    const { size, fontWeightBold } = theme.typography;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                display: "block",
                minHeight: pxToRem(24),
                marginBottom: pxToRem(2),
            },

            label: {
                display: "inline-block",
                fontSize: size.sm,
                fontWeight: fontWeightBold,
                color: isLight ? dark.main : white.main,
                lineHeight: 1,
                transform: `translateY(${pxToRem(1)})`,
                marginLeft: pxToRem(4),

                "&.Mui-disabled": {
                    color: isLight ? dark.main : white.main,
                },
            },
        },
    });
};

export default FormControlLabel;
