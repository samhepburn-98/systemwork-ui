import Root from "./Root";
import Contained from "./Contained";
import { Theme } from "@mui/material/styles";
import Outlined from "./Outlined";
import ButtonText from "./Text";

const Button = (theme: Theme) => {
    return ({
        defaultProps: {
            disableRipple: false,
        },
        styleOverrides: {
            root: { ...Root(theme) },
            contained: { ...Contained(theme).base },
            containedSizeSmall: { ...Contained(theme).small },
            containedSizeLarge: { ...Contained(theme).large },
            containedPrimary: { ...Contained(theme).primary },
            containedSecondary: { ...Contained(theme).secondary },
            outlined: { ...Outlined(theme).base },
            outlinedSizeSmall: { ...Outlined(theme).small },
            outlinedSizeLarge: { ...Outlined(theme).large },
            outlinedPrimary: { ...Outlined(theme).primary },
            outlinedSecondary: { ...Outlined(theme).secondary },
            text: { ...ButtonText(theme).base },
            textSizeSmall: { ...ButtonText(theme).small },
            textSizeLarge: { ...ButtonText(theme).large },
            textPrimary: { ...ButtonText(theme).primary },
            textSecondary: { ...ButtonText(theme).secondary },
        },
    });
};

export default Button;
