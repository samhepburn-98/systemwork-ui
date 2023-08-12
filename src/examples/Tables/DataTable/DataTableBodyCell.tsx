import { ReactNode } from "react";

import { Theme, useTheme } from "@mui/material/styles";

import MDBox from "src/mui-components/MDBox";

interface Props {
    children: ReactNode;
    noBorder?: boolean;
    align?: "left" | "right" | "center";
}

const DataTableBodyCell = ({ noBorder = false, align = "left", children }: Props) => {
    const theme = useTheme();
    const { palette } = theme;
    const darkMode = palette.mode === "dark";
    return (
        <MDBox
            component="td"
            textAlign={align}
            py={1.5}
            px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }: Theme) => ({
                fontSize: size.sm,
                borderBottom: noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`,
            })}
        >
            <MDBox
                display="inline-block"
                width="max-content"
                sx={{ verticalAlign: "middle", ...(darkMode && { color: palette.grey[100] }) }}
            >
                {children}
            </MDBox>
        </MDBox>
    );
};

export default DataTableBodyCell;
