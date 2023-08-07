import { Theme } from "@mui/material/styles";

const Breadcrumbs = (theme: Theme) => {
    const { grey } = theme.palette;
    const { size } = theme.typography;

    return ({
        styleOverrides: {
            li: {
                lineHeight: 0,
            },

            separator: {
                fontSize: size.sm,
                color: grey[600],
            },
        },
    });
};

export default Breadcrumbs;
