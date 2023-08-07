import pxToRem from "../../functions/pxToRem";
import linearGradient from "../../functions/linearGradient";
import { Theme } from "@mui/material/styles";

const SwitchButton = (theme: Theme) => {
    const { white, gradients, grey, transparent } = theme.palette;
    const { borderWidth } = theme.borders;
    const { md } = theme.boxShadows;

    return ({
        defaultProps: {
            disableRipple: false,
        },

        styleOverrides: {
            switchBase: {
                color: gradients.dark.main,

                "&:hover": {
                    backgroundColor: transparent.main,
                },

                "&.Mui-checked": {
                    color: gradients.dark.main,

                    "&:hover": {
                        backgroundColor: transparent.main,
                    },

                    "& .MuiSwitch-thumb": {
                        borderColor: `${gradients.dark.main} !important`,
                    },

                    "& + .MuiSwitch-track": {
                        backgroundColor: `${gradients.dark.main} !important`,
                        borderColor: `${gradients.dark.main} !important`,
                        opacity: 1,
                    },
                },

                "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: "0.3 !important",
                },

                "&.Mui-focusVisible .MuiSwitch-thumb": {
                    backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
                },
            },

            thumb: {
                backgroundColor: white.main,
                boxShadow: md,
                border: `${borderWidth[1]} solid ${grey[400]}`,
            },

            track: {
                width: pxToRem(32),
                height: pxToRem(15),
                backgroundColor: grey[400],
                border: `${borderWidth[1]} solid ${grey[400]}`,
                opacity: 1,
            },

            checked: {},
        },
    });
};

export default SwitchButton;
