import rgba from "../../functions/rgba";
import { Theme } from "@mui/material/styles";

const Card = (theme: Theme) => {
    const { black, white, background } = theme.palette;
    const { borderWidth, borderRadius } = theme.borders;
    const { md } = theme.boxShadows;
    const isLight = theme.palette.mode === "light";
    return ({
        styleOverrides: {
            root: {
                display: "flex",
                flexDirection: "column" as const,
                position: "relative" as const,
                minWidth: 0,
                wordWrap: "break-word" as const,
                backgroundImage: isLight ? undefined : "none",
                backgroundColor: isLight ? white.main : background.card,
                backgroundClip: "border-box",
                border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
                borderRadius: borderRadius.xl,
                boxShadow: md,
                overflow: "visible",
            },
        },
    });
};

export default Card;
