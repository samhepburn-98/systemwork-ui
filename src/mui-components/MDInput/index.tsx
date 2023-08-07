import { FC, forwardRef } from "react";

import { OutlinedTextFieldProps, StandardTextFieldProps } from "@mui/material";

import MDInputRoot from "src/mui-components/MDInput/MDInputRoot";

interface MDInputProps extends Omit<OutlinedTextFieldProps | StandardTextFieldProps, "variant"> {
    variant?: "standard" | "outlined";
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
}

const MDInput: FC<MDInputProps> = forwardRef(
    (
        {
            error = false,
            success = false,
            disabled = false,
            ...rest
        },
        ref
    ) => (
        <MDInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }}/>
    ));

export default MDInput;
