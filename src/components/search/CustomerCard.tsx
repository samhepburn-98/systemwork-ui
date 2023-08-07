import { ReactNode } from "react";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";
import MDAvatar from "src/mui-components/MDAvatar";

interface CustomerCardProps {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
    image?: string;
    title: string;
    dateTime?: string;
    description: ReactNode;
    users?: number;
    devices?: number;
    dropdown?: {
        action?: (...arg: any) => void;
        menu?: ReactNode;
    };

    [key: string]: unknown;
}

const CustomerCard = ({
                          color = "info",
                          image,
                          title = "",
                          dateTime,
                          description,
                          users,
                          devices,
                          dropdown,
                      }: CustomerCardProps) => {
    return (
        <Card>
            <MDBox p={2}>
                <MDBox display="flex" alignItems="center">
                    <MDAvatar
                        src={image}
                        alt={title}
                        size="xl"
                        variant="rounded"
                        bgColor={color}
                        sx={{ p: 1, mt: -5, borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl }}
                    />
                    <MDBox ml={2}>
                        <MDTypography variant="h5" textTransform="capitalize" fontWeight="medium">
                            {title}
                        </MDTypography>
                    </MDBox>
                    {
                        dropdown && (
                            <MDTypography
                                color="secondary"
                                onClick={dropdown.action}
                                sx={{
                                    ml: "auto",
                                    mt: -1,
                                    alignSelf: "flex-start",
                                    py: 1.25,
                                }}
                            >
                                <Icon sx={{ cursor: "pointer", fontWeight: "bold" }}>more_vert</Icon>
                            </MDTypography>
                        )
                    }
                    {dropdown?.menu}
                </MDBox>
                <MDBox my={2} lineHeight={1}>
                    <MDTypography variant="button" fontWeight="light" color="text">
                        {description}
                    </MDTypography>
                </MDBox>
                <Divider/>
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                    <MDBox display="flex" justifyContent="flex-start" gap={2} alignItems="center">
                        {
                            users !== undefined
                                ? (
                                    <MDBox display="flex" flexDirection="column" lineHeight={0}>
                                        <MDTypography variant="button" fontWeight="medium">
                                            {users}
                                        </MDTypography>
                                        <MDTypography variant="button" fontWeight="regular" color="secondary">
                                            Users
                                        </MDTypography>
                                    </MDBox>
                                )
                                : null
                        }
                        {
                            devices !== undefined
                                ? (
                                    <MDBox display="flex" flexDirection="column" lineHeight={0}>
                                        <MDTypography variant="button" fontWeight="medium">
                                            {devices}
                                        </MDTypography>
                                        <MDTypography variant="button" fontWeight="regular" color="secondary">
                                            Devices
                                        </MDTypography>
                                    </MDBox>
                                )
                                : null
                        }
                    </MDBox>
                    {
                        dateTime
                            ? (
                                <MDBox display="flex" flexDirection="column" lineHeight={0}>
                                    <MDTypography variant="button" fontWeight="medium">
                                        {dateTime}
                                    </MDTypography>
                                    <MDTypography variant="button" fontWeight="regular" color="secondary">
                                        Customer Since
                                    </MDTypography>
                                </MDBox>
                            )
                            : null
                    }
                </MDBox>
            </MDBox>
        </Card>
    );
};


export default CustomerCard;
