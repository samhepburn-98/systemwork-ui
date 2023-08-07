import { FC, forwardRef } from "react";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";

interface MDBadgeDotProps {
    variant?: "gradient" | "contained";
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    size?: "xs" | "sm" | "md" | "lg";
    badgeContent: string;
    font?: {
        color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | "white" | "text" | "inherit";
        weight: "light" | "bold" | "regular" | "medium";
    };

    [key: string]: unknown;
}

const MDBadgeDot: FC<MDBadgeDotProps> = forwardRef(
    (
        {
            variant = "contained",
            color = "info",
            size = "xs",
            badgeContent,
            font = {},
            ...rest
        },
        ref
    ) => {
        let finalSize;
        let fontSize: "caption" | "body2" | "button";
        let padding;

        if (size === "sm") {
            finalSize = "0.5rem";
            fontSize = "caption";
            padding = "0.45em 0.775em";
        } else if (size === "lg") {
            finalSize = "0.625rem";
            fontSize = "body2";
            padding = "0.85em 1.375em";
        } else if (size === "md") {
            finalSize = "0.5rem";
            fontSize = "button";
            padding = "0.65em 1em";
        } else {
            finalSize = "0.375rem";
            fontSize = "caption";
            padding = "0.45em 0.775em";
        }

        const validColors: ("light" | "dark" | "transparent" | "white" | "secondary" | "primary" | "info" | "success" | "warning" | "error")[] = [
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "light",
            "dark",
        ];

        const validColorIndex = validColors.findIndex((el) => el === color);

        return (
            <MDBox ref={ref} display="flex" alignItems="center" p={padding} {...rest}>
                <MDBox
                    component="i"
                    display="inline-block"
                    width={finalSize}
                    height={finalSize}
                    borderRadius="50%"
                    bgColor={validColors[validColorIndex]}
                    variant={variant}
                    mr={1}
                />
                <MDTypography
                    variant={fontSize}
                    fontWeight={font.weight ? font.weight : "regular"}
                    color={font.color ? font.color : "dark"}
                    sx={{ lineHeight: 0 }}
                >
                    {badgeContent}
                </MDTypography>
            </MDBox>
        );
    }
);

export default MDBadgeDot;
