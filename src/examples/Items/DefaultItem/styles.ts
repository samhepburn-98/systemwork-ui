import { Theme } from "@mui/material/styles";

interface DefaultItemIconBoxProps {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
}

const defaultItemIconBox = (theme: Theme, { color }: DefaultItemIconBoxProps) => {
    const { functions, palette, borders } = theme;

    const { pxToRem, linearGradient } = functions;
    const { gradients, dark, white } = palette;
    const { borderRadius } = borders;

    return {
        display: "grid",
        placeItems: "center",
        width: pxToRem(48),
        height: pxToRem(48),
        borderRadius: borderRadius.md,
        color: color === "light" ? dark.main : white.main,
        background: gradients[color]
            ? linearGradient(gradients[color].main, gradients[color].state)
            : linearGradient(gradients.info.main, gradients.info.state),
    };
};

export default defaultItemIconBox;
