import pxToRem from "../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const Container = (theme: Theme) => {
    const {
        values: { xs, sm, md, lg, xl },
    } = theme.breakpoints;

    const XS = `@media (min-width: ${xs}px)`;
    const SM = `@media (min-width: ${sm}px)`;
    const MD = `@media (min-width: ${md}px)`;
    const LG = `@media (min-width: ${lg}px)`;
    const XL = `@media (min-width: ${xl}px)`;

    const sharedClasses = {
        paddingRight: `${pxToRem(24)} !important`,
        paddingLeft: `${pxToRem(24)} !important`,
        marginRight: "auto !important",
        marginLeft: "auto !important",
        width: "100% !important",
        position: "relative" as const,
    };

    return ({
        [XS]: {
            ".MuiContainer-root": {
                ...sharedClasses,
                maxWidth: "540px !important",
            },
        },
        [SM]: {
            ".MuiContainer-root": {
                ...sharedClasses,
                maxWidth: "720px !important",
            },
        },
        [MD]: {
            ".MuiContainer-root": {
                ...sharedClasses,
                maxWidth: "960px !important",
            },
        },
        [LG]: {
            ".MuiContainer-root": {
                ...sharedClasses,
                maxWidth: "1140px !important",
            },
        },
        [XL]: {
            ".MuiContainer-root": {
                ...sharedClasses,
                maxWidth: "1320px !important",
            },
        },
    });
};

export default Container;
