import { Theme } from "@mui/material/styles";
import rgba from "../../functions/rgba";
import { grey } from "@mui/material/colors";

const Input = (theme: Theme) => {
    const { info, inputBorderColor, dark, white } = theme.palette;
    const { size } = theme.typography;
    const { borderWidth } = theme.borders;
    const isLight = theme.palette.mode === "light";


    return isLight
        ? ({
            styleOverrides: {
                root: {
                    fontSize: size.sm,
                    color: dark.main,

                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
                    },

                    "&:before": {
                        borderColor: inputBorderColor,
                    },

                    "&:after": {
                        borderColor: info.main,
                    },

                },
            },
        })
        : ({
            styleOverrides: {
                root: {
                    fontSize: size.sm,
                    color: dark.main,

                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `${borderWidth[1]} solid ${rgba(inputBorderColor, 0.6)}`,
                    },

                    "&:before": {
                        borderColor: rgba(inputBorderColor, 0.6),
                    },

                    "&:after": {
                        borderColor: info.main,
                    },

                    input: {
                        color: white.main,

                        "&::-webkit-input-placeholder": {
                            color: grey[500],
                        },
                    },
                },
            },

        });
};

export default Input;
