import { Theme } from "@mui/material/styles";

const AppBar = (theme: Theme) => {
    return ({
        defaultProps: {
            color: "transparent" as const,
        },

        styleOverrides: {
            root: {
                boxShadow: "none",
            },
        },
    });
};

export default AppBar;
