import { Theme } from "@mui/material/styles";

const FormLabel = (theme: Theme) => {
    const { text } = theme.palette;

    return ({
        styleOverrides: {
            root: {
                color: text.main,
            },
        },
    });
};

export default FormLabel;
