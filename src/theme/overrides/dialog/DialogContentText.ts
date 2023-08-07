import { Theme } from "@mui/material/styles";
import rgba from "../../functions/rgba";

const DialogContentText = (theme: Theme) => {
    const { size } = theme.typography;
    const { text, white } = theme.palette;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                fontSize: size.md,
                color: isLight ? text.primary : rgba(white.main, 0.8),
            },
        },
    });
};

export default DialogContentText;
