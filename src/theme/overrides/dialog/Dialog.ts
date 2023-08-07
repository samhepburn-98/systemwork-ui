import { Theme } from "@mui/material/styles";

const Dialog = (theme: Theme) => {
    const { borderRadius } = theme.borders;
    const { xxl } = theme.boxShadows;

    return ({
        styleOverrides: {
            paper: {
                borderRadius: borderRadius.lg,
                boxShadow: xxl,
            },

            paperFullScreen: {
                borderRadius: 0,
            },
        },
    });
};

export default Dialog;
