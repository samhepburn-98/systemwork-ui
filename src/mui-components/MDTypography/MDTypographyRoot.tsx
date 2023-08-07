import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

interface MDTypographyRootProps {
    ownerState: {
        color:
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
        fontWeight: "light" | "regular" | "medium" | "bold" | undefined;
        textTransform: "none" | "capitalize" | "uppercase" | "lowercase";
        verticalAlign:
            | "unset"
            | "baseline"
            | "sub"
            | "super"
            | "text-top"
            | "text-bottom"
            | "middle"
            | "top"
            | "bottom";
        textGradient: boolean;
        opacity: number;
    };
}

const MDTypographyRoot = styled(Typography)(({ ownerState }: MDTypographyRootProps) => {
    const theme = useTheme();
    const { palette, typography, functions } = theme;
    const darkMode = palette.mode === "dark";

    const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient } =
        ownerState;

    const { gradients, transparent, white } = palette;
    const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
    const { linearGradient } = functions;

    const fontWeights: {
        [key: string]: number
    } = {
        light: fontWeightLight,
        regular: fontWeightRegular,
        medium: fontWeightMedium,
        bold: fontWeightBold,
    };

    // color value
    let colorValue = color === "inherit" || !palette[color] ? "inherit" : palette[color].main;

    if (darkMode && (color === "inherit" || !palette[color])) {
        colorValue = "inherit";
    } else if (darkMode && color === "dark") colorValue = white.main;

    return {
        opacity,
        textTransform,
        verticalAlign,
        textDecoration: "none",
        color: colorValue,
        fontWeight: fontWeight && fontWeights[fontWeight],
        // styles for the typography with textGradient={true}
        ...(textGradient && {
            backgroundImage:
                color !== "inherit" && color !== "text" && color !== "white" && gradients[color]
                    ? linearGradient(gradients[color].main, gradients[color].state)
                    : linearGradient(gradients.dark.main, gradients.dark.state),
            display: "inline-block",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: transparent.main,
            position: "relative",
            zIndex: 1,
        }),
    };
});

export default MDTypographyRoot;
