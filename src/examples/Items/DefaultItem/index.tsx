import { FC, forwardRef, ReactNode } from "react";

import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";

import defaultItemIconBox from "src/examples/Items/DefaultItem/styles";

interface Props {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
    icon: ReactNode;
    title: string;
    description: string;

    [key: string]: unknown;
}

const DefaultItem: FC<Props> = forwardRef(({ color = "info", icon, title, description, ...rest }, ref) => (
    <MDBox {...rest} ref={ref} display="flex" alignItems="center">
        <MDBox sx={(theme) => defaultItemIconBox(theme, { color })}>
            <Icon>{icon}</Icon>
        </MDBox>
        <MDBox ml={2} mt={0.5} lineHeight={1.4}>
            <MDTypography display="block" variant="button" fontWeight="medium">
                {title}
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text">
                {description}
            </MDTypography>
        </MDBox>
    </MDBox>
));

export default DefaultItem;
