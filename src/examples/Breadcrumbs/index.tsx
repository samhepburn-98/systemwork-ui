import { ReactNode } from "react";

import { Link } from "react-router-dom";

import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";

interface BreadcrumbsProps {
    icon: ReactNode;
    title: string;
    route: string[];
    light?: boolean;

    [key: string]: unknown;
}

const Breadcrumbs = ({ icon, title, route, light }: BreadcrumbsProps) => {
    const routes = route.slice(0, -1);

    return (
        <MDBox mr={{ xs: 0, xl: 8 }}>
            <MuiBreadcrumbs
                sx={{
                    "& .MuiBreadcrumbs-separator": {
                        color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
                    },
                }}
            >
                <Link to="/">
                    <MDTypography
                        component="span"
                        variant="body2"
                        color={light ? "white" : "dark"}
                        opacity={light ? 0.8 : 0.5}
                        sx={{ lineHeight: 0 }}
                    >
                        <Icon>{icon}</Icon>
                    </MDTypography>
                </Link>
                {routes.map((el: string) => (
                    <Link to={`/${el}`} key={el}>
                        <MDTypography
                            component="span"
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color={light ? "white" : "dark"}
                            opacity={light ? 0.8 : 0.5}
                            sx={{ lineHeight: 0 }}
                        >
                            {el}
                        </MDTypography>
                    </Link>
                ))}
                <MDTypography
                    variant="button"
                    fontWeight="regular"
                    textTransform="capitalize"
                    color={light ? "white" : "dark"}
                    sx={{ lineHeight: 0 }}
                >
                    {title.replace("-", " ")}
                </MDTypography>
            </MuiBreadcrumbs>
            <MDTypography
                fontWeight="bold"
                textTransform="capitalize"
                variant="h6"
                color={light ? "white" : "dark"}
                noWrap
            >
                {title.replace("-", " ")}
            </MDTypography>
        </MDBox>
    );
};

// Declaring default props for Breadcrumbs
Breadcrumbs.defaultProps = {
    light: false,
};

export default Breadcrumbs;
