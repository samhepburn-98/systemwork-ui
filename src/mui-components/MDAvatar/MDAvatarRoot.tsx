import Avatar from "@mui/material/Avatar";
import { styled, useTheme } from "@mui/material/styles";

interface MDAvatarRootProps {
    ownerState: {
        bgColor?:
            | "transparent"
            | "primary"
            | "secondary"
            | "info"
            | "success"
            | "warning"
            | "error"
            | "light"
            | "dark";
        size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
        shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "inset";
    };
}

const MDAvatarRoot = styled(Avatar)(({ ownerState }: MDAvatarRootProps) => {
    const theme = useTheme();
    const { palette, functions, typography, boxShadows } = theme;
    const { shadow, bgColor, size } = ownerState;

    const { gradients, transparent, white } = palette;
    const { pxToRem, linearGradient } = functions;
    const { size: fontSize, fontWeightRegular } = typography;

    // backgroundImage value
    const backgroundValue =
        bgColor && bgColor !== "transparent"
            ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
            : transparent.main;

    const shadowValue = shadow && shadow !== "none" ? boxShadows[shadow] : undefined;

    // size value
    let sizeValue;

    switch (size) {
        case "xs":
            sizeValue = {
                width: pxToRem(24),
                height: pxToRem(24),
                fontSize: fontSize.xs,
            };
            break;
        case "sm":
            sizeValue = {
                width: pxToRem(36),
                height: pxToRem(36),
                fontSize: fontSize.sm,
            };
            break;
        case "lg":
            sizeValue = {
                width: pxToRem(58),
                height: pxToRem(58),
                fontSize: fontSize.sm,
            };
            break;
        case "xl":
            sizeValue = {
                width: pxToRem(74),
                height: pxToRem(74),
                fontSize: fontSize.md,
            };
            break;
        case "xxl":
            sizeValue = {
                width: pxToRem(110),
                height: pxToRem(110),
                fontSize: fontSize.md,
            };
            break;
        default: {
            sizeValue = {
                width: pxToRem(48),
                height: pxToRem(48),
                fontSize: fontSize.md,
            };
        }
    }

    return {
        background: backgroundValue,
        color: white.main,
        fontWeight: fontWeightRegular,
        boxShadow: shadowValue,
        ...sizeValue,
    };
});

export default MDAvatarRoot;
