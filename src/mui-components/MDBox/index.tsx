import { FC, forwardRef } from "react";

import { BoxProps } from "@mui/material";

import MDBoxRoot from "src/mui-components/MDBox/MDBoxRoot";

interface MDBoxProps extends BoxProps {
    variant?: "contained" | "gradient";
    bgColor?: "transparent" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | "white";
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | "white";
    opacity?: number;
    borderRadius?: string;
    shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "inset";
    coloredShadow?: "none" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";

    [key: string]: unknown;
}

const MDBox: FC<MDBoxProps> = forwardRef(
    (
        {
            variant = "contained",
            bgColor = "transparent",
            color = "dark",
            opacity = 1,
            borderRadius = "none",
            shadow = "none",
            coloredShadow = "none",
            ...rest
        },
        ref
    ) => (
        <MDBoxRoot
            {...rest}
            ref={ref}
            ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
        />
    )
);

export default MDBox;
