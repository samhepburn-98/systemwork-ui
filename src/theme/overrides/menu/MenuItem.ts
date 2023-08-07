import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";
import rgba from "../../functions/rgba";

const MenuItem = (theme: Theme) => {
    const { light, text, dark, white } = theme.palette;
    const { borderRadius } = theme.borders;
    const { size } = theme.typography;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                minWidth: pxToRem(160),
                minHeight: "unset",
                padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
                borderRadius: borderRadius.md,
                fontSize: size.sm,
                color: isLight ? text.primary : rgba(white.main, 0.8),
                transition: "background-color 300ms ease, color 300ms ease",

                "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
                    backgroundColor: isLight ? light : dark,
                    color: isLight ? dark : white,
                },
            },
        },
    });
};

export default MenuItem;
