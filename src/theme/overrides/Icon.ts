import pxToRem from "../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Icon = (_theme: Theme) => {
    return ({
        defaultProps: {
            baseClassName: "material-icons-round",
            fontSize: "inherit" as const,
        },

        styleOverrides: {
            fontSizeInherit: {
                fontSize: "inherit !important",
            },

            fontSizeSmall: {
                fontSize: `${pxToRem(20)} !important`,
            },

            fontSizeLarge: {
                fontSize: `${pxToRem(36)} !important`,
            },
        },
    });
};

export default Icon;
