import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";

interface MDBoxRootProps {
    ownerState: {
        variant: "contained" | "gradient";
        bgColor: "transparent" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | "white";
        color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | "white";
        opacity: number;
        borderRadius: string;
        shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "inset";
        coloredShadow: "none" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    };
}


const MDBoxRoot = styled(Box)(({ ownerState }: MDBoxRootProps) => {
    const theme = useTheme();
    const { palette, functions, borders, boxShadows } = theme;
    const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

    const { gradients, grey, white } = palette;
    const { linearGradient } = functions;
    const { borderRadius: radius } = borders;
    const { colored } = boxShadows;

    const greyColors: { [key: string]: string } = {
        "grey-100": grey[100],
        "grey-200": grey[200],
        "grey-300": grey[300],
        "grey-400": grey[400],
        "grey-500": grey[500],
        "grey-600": grey[600],
        "grey-700": grey[700],
        "grey-800": grey[800],
        "grey-900": grey[900],
    };

    const validGradients = [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
    ];

    const validColors = [
        "transparent",
        "white",
        "black",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "text",
        "grey-100",
        "grey-200",
        "grey-300",
        "grey-400",
        "grey-500",
        "grey-600",
        "grey-700",
        "grey-800",
        "grey-900",
    ];

    const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
    const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

    // background value
    let backgroundValue;

    if (bgColor && variant === "gradient") {
        backgroundValue = bgColor !== "transparent" && bgColor !== "white" && validGradients.find((el) => el === bgColor)
            ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
            : white.main;
    } else if (validColors.find((el) => el === bgColor)) {
        backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
    } else {
        backgroundValue = bgColor;
    }

    // color value
    let colorValue;

    if (validColors.find((el) => el === color)) {
        colorValue = palette[color] ? palette[color].main : greyColors[color];
    }

    // borderRadius value
    let borderRadiusValue = borderRadius;

    if (validBorderRadius.find((el) => el === borderRadius)) {
        borderRadiusValue = radius[borderRadius] as string;
    }

    // boxShadow value
    let boxShadowValue = "none";

    if (validBoxShadows.find((el) => el === shadow)) {
        boxShadowValue = shadow && shadow !== "none" ? boxShadows[shadow] : "none";
    } else if (coloredShadow) {
        boxShadowValue = coloredShadow !== "none" && colored[coloredShadow] ? colored[coloredShadow] : "none";
    }

    return {
        opacity,
        background: backgroundValue,
        color: colorValue,
        borderRadius: borderRadiusValue,
        boxShadow: boxShadowValue,
    };
});

export default MDBoxRoot;
