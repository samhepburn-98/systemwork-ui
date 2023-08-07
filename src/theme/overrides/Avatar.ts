import { Theme } from "@mui/material/styles";

const Avatar = (theme: Theme) => {
    const { borderRadius } = theme.borders;

    return ({
        styleOverrides: {
            root: {
                transition: "all 200ms ease-in-out",
            },

            rounded: {
                borderRadius: borderRadius.lg,
            },

            img: {
                height: "auto",
            },
        },
    });
};

export default Avatar;
