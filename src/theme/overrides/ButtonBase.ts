import { Theme } from "@mui/material/styles";

const ButtonBase = (_theme: Theme) => {
    return ({
        defaultProps: {
            disableRipple: false,
        },
    });
};

export default ButtonBase;
