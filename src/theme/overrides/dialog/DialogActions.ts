import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const DialogActions = (theme: Theme) => {
    return ({
        styleOverrides: {
            root: {
                padding: pxToRem(16),
            },
        },
    });
};

export default DialogActions;
