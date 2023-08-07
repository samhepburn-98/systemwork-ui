import { Theme } from "@mui/material/styles";

const IconButton = (theme: Theme) => {
    const { transparent } = theme.palette;
    return ({
        styleOverrides: {
            root: {
                "&:hover": {
                    backgroundColor: transparent,
                },
            },
        },
    });
};

export default IconButton;
