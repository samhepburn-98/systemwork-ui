import { Theme } from "@mui/material/styles";

const CardHeader = (_theme: Theme) => {
    return ({
        defaultProps: {
            titleTypographyProps: { variant: "h6" as const }
        },
    });
};

export default CardHeader;
