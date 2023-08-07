import { Theme } from "@mui/material/styles";

const CardHeader = (theme: Theme) => {
    return ({
        defaultProps: {
            titleTypographyProps: { variant: "h6" as const }
        },
    });
};

export default CardHeader;
