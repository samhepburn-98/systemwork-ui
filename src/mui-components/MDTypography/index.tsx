import { FC, forwardRef, ReactNode } from "react";

import { TypographyProps } from "@mui/material";

import MDTypographyRoot from "src/mui-components/MDTypography/MDTypographyRoot";

interface MDTypographyProps extends TypographyProps {
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
        | "light"
        | "dark"
        | "text"
        | "white";
    fontWeight?: "light" | "regular" | "medium" | "bold" | undefined;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
    verticalAlign?:
        | "unset"
        | "baseline"
        | "sub"
        | "super"
        | "text-top"
        | "text-bottom"
        | "middle"
        | "top"
        | "bottom";
    textGradient?: boolean;
    children: ReactNode;
    opacity?: number;

    [key: string]: unknown;
}

const MDTypography: FC<MDTypographyProps> = forwardRef(
    (
        {
            color = "dark",
            fontWeight = undefined,
            textTransform = "none",
            verticalAlign = "unset",
            textGradient = false,
            opacity = 1,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <MDTypographyRoot
                {...rest}
                ref={ref}
                ownerState={{
                    color,
                    textTransform,
                    verticalAlign,
                    fontWeight,
                    opacity,
                    textGradient,
                }}
            >
                {children}
            </MDTypographyRoot>
        );
    }
);

export default MDTypography;
