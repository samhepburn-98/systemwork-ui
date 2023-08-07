import { Theme } from "@mui/material/styles";

const TableContainer = (theme: Theme) => {
    const { background, white } = theme.palette;
    const { md } = theme.boxShadows;
    const { borderRadius } = theme.borders;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                backgroundColor: isLight ? white.main : background.card,
                boxShadow: md,
                borderRadius: borderRadius.xl,
            },
        },
    });
};

export default TableContainer;
