import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const DialogTitle = (theme: Theme) => {
    const { size } = theme.typography;

    return ({
        styleOverrides: {
            root: {
                padding: pxToRem(16),
                fontSize: size.xl,
            },
        },
    });
};

export default DialogTitle;
