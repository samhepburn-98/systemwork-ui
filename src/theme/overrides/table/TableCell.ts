import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const TableCell = (theme: Theme) => {
    const { borderWidth } = theme.borders;
    const { light } = theme.palette;

    return ({
        styleOverrides: {
            root: {
                padding: `${pxToRem(12)} ${pxToRem(16)}`,
                borderBottom: `${borderWidth[1]} solid ${light}`,
            },
        },
    });
};

export default TableCell;
