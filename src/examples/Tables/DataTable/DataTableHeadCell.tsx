import { ReactNode } from "react";

import Icon from "@mui/material/Icon";
import { Theme, useTheme } from "@mui/material/styles";

import MDBox from "src/mui-components/MDBox";

interface Props {
    width?: string | number;
    children: ReactNode;
    sorted?: false | "none" | "asce" | "desc";
    align?: "left" | "right" | "center";
}

const DataTableHeadCell = ({ width = "auto", children, sorted = "none", align = "left", ...rest }: Props) => {
    const theme = useTheme();
    const { typography, palette } = theme;
    const { size, fontWeightBold } = typography;
    const darkMode = palette.mode === "dark";

    return (
        <MDBox
            component="th"
            width={width}
            py={1.5}
            px={3}
            sx={({ palette: { light }, borders: { borderWidth } }: Theme) => ({
                borderBottom: `${borderWidth[1]} solid ${light.main}`,
            })}
        >
            <MDBox
                {...rest}
                position="relative"
                textAlign={align}
                color={darkMode ? "white" : "secondary"}
                opacity={0.7}
                sx={{
                    fontSize: size.xxs,
                    fontWeight: fontWeightBold,
                    textTransform: "uppercase",
                    ...(sorted && { cursor: "pointer", userSelect: "none" })
                }}
            >
                {children}
                {sorted && (
                    <MDBox
                        position="absolute"
                        top={0}
                        right={align !== "right" ? "16px" : 0}
                        left={align === "right" ? "-5px" : "unset"}
                        sx={({ typography: { size } }: any) => ({
                            fontSize: size.lg,
                        })}
                    >
                        <MDBox
                            position="absolute"
                            top={-6}
                            sx={{ color: sorted === "asce" ? "text" : "secondary" }}
                            opacity={sorted === "asce" ? 1 : 0.5}
                        >
                            <Icon>arrow_drop_up</Icon>
                        </MDBox>
                        <MDBox
                            position="absolute"
                            top={0}
                            sx={{ color: sorted === "desc" ? "text" : "secondary" }}
                            opacity={sorted === "desc" ? 1 : 0.5}
                        >
                            <Icon>arrow_drop_down</Icon>
                        </MDBox>
                    </MDBox>
                )}
            </MDBox>
        </MDBox>
    );
};

export default DataTableHeadCell;
