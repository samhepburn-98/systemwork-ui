import pxToRem from "../../functions/pxToRem";
import linearGradient from "../../functions/linearGradient";
import { Theme } from "@mui/material/styles";

const Stepper = (theme: Theme) => {
    const { transparent, gradients } = theme.palette;
    const { borderRadius } = theme.borders;
    const { colored } = theme.boxShadows;

    return ({
        styleOverrides: {
            root: {
                background: linearGradient(gradients.info.main, gradients.info.state),
                padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
                borderRadius: borderRadius.lg,
                boxShadow: colored.info,

                "&.MuiPaper-root": {
                    backgroundColor: transparent,
                },
            },
        },
    });
};

export default Stepper;
