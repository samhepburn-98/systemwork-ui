import { FC, forwardRef } from "react";

import MDTypography from "src/mui-components/MDTypography";

import MDProgressRoot from "src/mui-components/MDProgress/MDProgressRoot";

interface MDProgressProps {
    variant?: "contained" | "gradient";
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    value: number;
    label?: boolean;

    [key: string]: unknown;
}

const MDProgress: FC<MDProgressProps> = forwardRef((
    {
        variant = "contained",
        color = "info",
        value = 0,
        label = false,
        ...rest
    },
    ref
) => (
    <>
        {
            label && (
                <MDTypography variant="button" fontWeight="medium">
                    {value}%
                </MDTypography>
            )
        }
        <MDProgressRoot
            {...rest}
            ref={ref}
            variant="determinate"
            value={value}
            ownerState={{ color, value, variant }}
        />
    </>
));

export default MDProgress;
