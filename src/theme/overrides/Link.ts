import { Theme } from "@mui/material/styles";

const Link = (_theme: Theme) => {
    return ({
        defaultProps: {
            underline: "none" as const,
            color: "inherit",
        },
    });
};

export default Link;
