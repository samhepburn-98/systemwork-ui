import pxToRem from "../../functions/pxToRem";
import rgba from "../../functions/rgba";
import { Theme } from "@mui/material/styles";

const StepLabel = (theme: Theme) => {
    const { size, fontWeightRegular } = theme.typography;
    const { white } = theme.palette;

    return ({
        styleOverrides: {
            label: {
                marginTop: `${pxToRem(8)} !important`,
                fontWeight: fontWeightRegular,
                fontSize: size.xs,
                color: "#9fc9ff",
                textTransform: "uppercase" as const,

                "&.Mui-active": {
                    fontWeight: `${fontWeightRegular} !important`,
                    color: `${rgba(white.main, 0.8)} !important`,
                },

                "&.Mui-completed": {
                    fontWeight: `${fontWeightRegular} !important`,
                    color: `${rgba(white.main, 0.8)} !important`,
                },
            },
        },
    });
};

export default StepLabel;
