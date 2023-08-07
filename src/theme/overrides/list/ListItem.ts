import { Theme } from "@mui/material/styles";

const ListItem = (_theme: Theme) => {
    return ({
        defaultProps: {
            disableGutters: true,
        },

        styleOverrides: {
            root: {
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
    });
};

export default ListItem;
