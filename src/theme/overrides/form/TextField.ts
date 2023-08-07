import { Theme } from "@mui/material/styles";

const TextField = (theme: Theme) => {
    const { transparent } = theme.palette;

    return ({
        styleOverrides: {
            root: {
                backgroundColor: transparent.main,
            },
        },
    });
};

export default TextField;
