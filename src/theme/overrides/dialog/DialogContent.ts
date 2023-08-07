import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";
import rgba from "../../functions/rgba";

const DialogContent = (theme: Theme) => {
    const { size } = theme.typography;
    const { text, white } = theme.palette;
    const { borderWidth, borderColor } = theme.borders;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                padding: pxToRem(16),
                fontSize: size.md,
                color: isLight ? text.primary : rgba(white.main, 0.8),
            },

            dividers: {
                borderTop: isLight ? `${borderWidth[1]} solid ${borderColor}` : `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
                borderBottom: isLight ? `${borderWidth[1]} solid ${borderColor}` : `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
            },
        },
    });
};

export default DialogContent;
