import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";
import rgba from "../../functions/rgba";

const Autocomplete = (theme: Theme) => {
    const { lg, md } = theme.boxShadows;
    const { size } = theme.typography;
    const { background, text, white, transparent, light, dark, gradients } = theme.palette;
    const { borderRadius } = theme.borders;
    const isLight = theme.palette.mode === "light";

    return ({
        styleOverrides: {
            popper: {
                boxShadow: isLight ? lg : md,
                padding: pxToRem(8),
                fontSize: size.sm,
                color: text.main,
                textAlign: "left" as const,
                backgroundColor: isLight ? `${white.main} !important` : `${background.paper} !important`,
                borderRadius: borderRadius.md,
            },

            paper: {
                boxShadow: "none",
                backgroundColor: transparent.main,
            },

            option: {
                padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
                borderRadius: borderRadius.md,
                fontSize: size.sm,
                color: text.main,
                transition: "background-color 300ms ease, color 300ms ease",

                "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
                    backgroundColor: isLight ? light : rgba(light.main, 0.2),
                    color: isLight ? dark.main : white.main,
                },

                "&[aria-selected=\"true\"]": {
                    backgroundColor: isLight ? `${light.main} !important` : `${rgba(light.main, 0.2)} !important`,
                    color: isLight ? `${dark.main} !important` : `${white.main} !important`,
                },
            },

            noOptions: {
                fontSize: size.sm,
                color: text.main,
            },

            groupLabel: {
                color: dark.main,
            },

            loading: {
                fontSize: size.sm,
                color: text.main,
            },

            tag: {
                display: "flex",
                alignItems: "center",
                height: "auto",
                padding: pxToRem(4),
                backgroundColor: gradients.dark.state,
                color: white.main,

                "& .MuiChip-label": {
                    lineHeight: 1.2,
                    padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
                },

                "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
                    color: white.main,
                    marginRight: 0,
                },
            },

            popupIndicator: {
                color: isLight ? undefined : text.main,
            },

            clearIndicator: {
                color: isLight ? undefined : text.main,
            },
        },
    });
};

export default Autocomplete;
