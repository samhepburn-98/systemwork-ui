import { FC, forwardRef, ReactNode } from "react";

import { BadgeProps } from "@mui/material";

import MDBadgeRoot from "src/mui-components/MDBadge/MDBadgeRoot";

interface MDBadgeProps extends Omit<BadgeProps, "color" | "variant"> {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    variant?: "gradient" | "contained";
    size?: "xs" | "sm" | "md" | "lg";
    circular?: boolean;
    indicator?: boolean;
    border?: boolean;
    children?: ReactNode;
    container?: boolean;

    [key: string]: unknown;
}

const MDBadge: FC<MDBadgeProps> = forwardRef(
    (
        {
            color = "info",
            variant = "gradient",
            size = "sm",
            circular = false,
            indicator = false,
            border = false,
            container = false,
            children = false,
            ...rest
        },
        ref
    ) => (
        <MDBadgeRoot
            {...rest}
            ownerState={{ color, variant, size, circular, indicator, border, container, children }}
            ref={ref}
            color="default"
        >
            {children}
        </MDBadgeRoot>
    )
);

export default MDBadge;
