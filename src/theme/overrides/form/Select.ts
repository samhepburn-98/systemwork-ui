import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Select = (theme: Theme) => {
    const { transparent } = theme.palette;

    return ({
        styleOverrides: {
            select: {
                display: "grid",
                alignItems: "center",
                padding: `0 ${pxToRem(12)} !important`,

                "& .Mui-selected": {
                    backgroundColor: transparent,
                },
            },

            selectMenu: {
                background: "none",
                height: "none",
                minHeight: "none",
                overflow: "unset",
            },

            icon: {
                display: "none",
            },
        },
    });
};

export default Select;
