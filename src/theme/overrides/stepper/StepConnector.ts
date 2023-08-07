import { Theme } from "@mui/material/styles";

const StepConnector = (theme: Theme) => {
    const { white } = theme.palette;
    const { borderWidth } = theme.borders;

    return ({
        styleOverrides: {
            root: {
                color: "#9fc9ff",
                transition: "all 200ms linear",

                "&.Mui-active": {
                    color: white,
                },

                "&.Mui-completed": {
                    color: white,
                },
            },

            alternativeLabel: {
                top: "14%",
                left: "-50%",
                right: "50%",
            },

            line: {
                borderWidth: `${borderWidth[2]} !important`,
                borderColor: "currentColor",
                opacity: 0.5,
            },
        },
    });
};

export default StepConnector;
