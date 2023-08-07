import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface MDAlertRootProps {
    ownerState: {
        color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    };
}

const MDAlertRoot = styled(Box)(({ ownerState }: MDAlertRootProps) => {
    const theme = useTheme();
    const { palette, typography, borders, functions } = theme;
    const { color } = ownerState;

    const { white, gradients } = palette;
    const { size, fontWeightMedium } = typography;
    const { borderRadius } = borders;
    const { pxToRem, linearGradient } = functions;

    // backgroundImage value
    const backgroundImageValue = color && gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.info.main, gradients.info.state);

    return {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: pxToRem(60),
        backgroundImage: backgroundImageValue,
        color: white.main,
        position: "relative",
        padding: pxToRem(16),
        marginBottom: pxToRem(16),
        borderRadius: borderRadius.md,
        fontSize: size.md,
        fontWeight: fontWeightMedium,
    };
});

export default MDAlertRoot;
