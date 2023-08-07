import { Theme } from "@mui/material/styles";

const ListItemText = (theme: Theme) => {
    return ({
        styleOverrides: {
            root: {
                marginTop: 0,
                marginBottom: 0,
            },
        },
    });
};

export default ListItemText;
