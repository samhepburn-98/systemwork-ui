import { Theme } from "@mui/material/styles";
import pxToRem from "../functions/pxToRem";
import boxShadow from "../functions/boxShadow";

const Slider = (theme: Theme) => {
    const { grey, white, black, info } = theme.palette;
    const { borderRadius, borderWidth } = theme.borders;
    const { sliderBoxShadow } = theme.boxShadows;

    return ({
        styleOverrides: {
            root: {
                width: "100%",

                "& .MuiSlider-active, & .Mui-focusVisible": {
                    boxShadow: "none !important",
                },

                "& .MuiSlider-valueLabel": {
                    color: black.main,
                },
            },

            rail: {
                height: pxToRem(2),
                background: grey[200],
                borderRadius: borderRadius.sm,
                opacity: 1,
            },

            track: {
                background: info.main,
                height: pxToRem(2),
                position: "relative" as const,
                border: "none",
                borderRadius: borderRadius.lg,
                zIndex: 1,
            },

            thumb: {
                width: pxToRem(14),
                height: pxToRem(14),
                backgroundColor: white.main,
                zIndex: 10,
                boxShadow: sliderBoxShadow.thumb,
                border: `${borderWidth[1]} solid ${info.main}`,
                transition: "all 200ms linear",

                "&:hover": {
                    boxShadow: "none",
                },

                "&:active": {
                    transform: "translate(-50%, -50%) scale(1.4)",
                },

                "&.Mui-active": { boxShadow: boxShadow([0, 0], [0, 14], info.main, 0.16) },
            },
        },
    });
}

export default Slider;
