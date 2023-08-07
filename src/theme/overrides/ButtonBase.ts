import { Theme } from "@mui/material/styles";

const ButtonBase = (theme: Theme) => {
    return ({
        defaultProps: {
            disableRipple: false,
        },
    });
};

export default ButtonBase;
