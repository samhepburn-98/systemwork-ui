import { Theme } from "@mui/material/styles";

const List = (theme: Theme) => {
    return ({
        styleOverrides: {
            padding: {
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
    });
};

export default List;
