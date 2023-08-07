import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const CardMedia = (theme: Theme) => {
    const { borderRadius } = theme.borders;

    return ({
        styleOverrides: {
            root: {
                borderRadius: borderRadius.xl,
                margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
            },

            media: {
                width: "auto",
            },
        },
    });
};

export default CardMedia;
