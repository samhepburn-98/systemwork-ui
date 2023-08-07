import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";
import rgba from "../../functions/rgba";

const InputOutlined = (theme: Theme) => {
    const { inputBorderColor, info, grey, transparent, white } = theme.palette;
    const { borderRadius } = theme.borders;
    const { size } = theme.typography;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                backgroundColor: transparent.main,
                fontSize: size.sm,
                borderRadius: borderRadius.md,

                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: inputBorderColor,
                },

                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: info.main,
                    },
                },
            },

            notchedOutline: {
                borderColor: isLight ? inputBorderColor : rgba(inputBorderColor, 0.6),
            },

            input: {
                color: isLight ? grey[700] : white.main,
                padding: pxToRem(12),
                backgroundColor: transparent.main,

                "&::-webkit-input-placeholder": {
                    color: isLight ? undefined : grey[100],
                },
            },

            inputSizeSmall: {
                fontSize: size.xs,
                padding: pxToRem(10),
            },

            multiline: {
                color: grey[700],
                padding: 0,
            },
        },
    });
};

export default InputOutlined;
