import pxToRem from "../../functions/pxToRem";
import { Theme } from "@mui/material/styles";

const TableHead = (theme: Theme) => {
    const { borderRadius } = theme.borders;

    return ({
        styleOverrides: {
            root: {
                display: "block",
                    padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
                    borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
            },
        },
    })
};

export default TableHead;
