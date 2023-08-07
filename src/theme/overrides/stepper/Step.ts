import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Step = (_theme: Theme) => {
    return ({
        styleOverrides: {
            root: {
                padding: `0 ${pxToRem(6)}`,
            },
        },
    });
};

export default Step;
