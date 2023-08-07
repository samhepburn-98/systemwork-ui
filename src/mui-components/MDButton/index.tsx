import { FC, forwardRef, ReactNode } from "react";

import { ButtonProps } from "@mui/material";

import MDButtonRoot from "src/mui-components/MDButton/MDButtonRoot";

interface MDButtonProps extends Omit<ButtonProps, "color" | "variant"> {
    color?:
        | "white"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
        | "light"
        | "dark";
    variant?: "text" | "contained" | "outlined" | "gradient";
    size?: "small" | "medium" | "large";
    circular?: boolean;
    iconOnly?: boolean;
    children?: ReactNode;

    [key: string]: unknown;
}

const MDButton: FC<MDButtonProps> = forwardRef(
    (
        {
            color = "white",
            variant = "contained",
            size = "medium",
            circular = false,
            iconOnly = false,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <MDButtonRoot
                {...rest}
                ref={ref}
                color="primary"
                variant={variant === "gradient" ? "contained" : variant}
                size={size}
                ownerState={{ color, variant, size, circular, iconOnly }}
            >
                {children}
            </MDButtonRoot>
        );
    }
);

export default MDButton;
