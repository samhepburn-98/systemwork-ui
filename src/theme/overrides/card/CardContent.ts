import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const CardContent = (theme: Theme) => {
    return ({
        styleOverrides: {
            root: {
                marginTop: 0,
                marginBottom: 0,
                padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
            },
        },
    });
};

export default CardContent;
