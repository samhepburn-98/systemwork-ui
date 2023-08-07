import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Tab = (theme: Theme) => {
    const { size, fontWeightRegular } = theme.typography;
    const { borderRadius } = theme.borders;
    const { dark, white } = theme.palette;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            root: {
                display: "flex",
                alignItems: "center",
                flexDirection: "row" as const,
                flex: "1 1 auto",
                textAlign: "center" as const,
                maxWidth: "unset !important",
                minWidth: "unset !important",
                minHeight: "unset !important",
                fontSize: size.md,
                fontWeight: fontWeightRegular,
                textTransform: "none" as const,
                lineHeight: "inherit",
                padding: pxToRem(4),
                borderRadius: borderRadius.lg,
                color: isLight ? `${dark} !important` : `${white} !important`,
                opacity: "1 !important",

                "& .material-icons, .material-icons-round": {
                    marginBottom: "0 !important",
                    marginRight: pxToRem(6),
                },

                "& svg": {
                    marginBottom: "0 !important",
                    marginRight: pxToRem(6),
                },
            },

            labelIcon: {
                paddingTop: pxToRem(4),
            },
        },
    });
};

export default Tab;
