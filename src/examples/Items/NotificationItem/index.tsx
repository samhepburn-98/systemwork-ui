import { FC, forwardRef, ReactNode } from "react";

import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { MenuItemProps } from "@mui/material";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";

import menuItem from "src/examples/Items/NotificationItem/styles";

// Declaring props types for NotificationItem
interface Props extends MenuItemProps {
    icon: ReactNode;
    title: string;

    [key: string]: unknown;
}

const NotificationItem: FC<Props> = forwardRef(({ icon, title, ...rest }, ref) => (
    <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
        <MDBox component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
            <MDTypography variant="body1" color="secondary" lineHeight={0.75}>
                {icon}
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
                {title}
            </MDTypography>
        </MDBox>
    </MenuItem>
));

export default NotificationItem;
