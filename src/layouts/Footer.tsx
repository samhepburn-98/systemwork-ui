import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";
import { useTheme } from "@mui/material/styles";

interface FooterProps {
    company?: {
        href: string;
        name: string;
    };
    links?: {
        href: string;
        name: string;
    }[];

    [key: string]: unknown;
}

const Footer = ({ company, links }: FooterProps) => {
    const theme = useTheme();
    const { typography } = theme;
    const { size } = typography;

    const renderLinks = () =>
        links?.map((link) => (
            <MDBox key={link.name} component="li" px={2} lineHeight={1}>
                <Link href={link.href} target="_blank">
                    <MDTypography variant="button" fontWeight="regular">
                        {link.name}
                    </MDTypography>
                </Link>
            </MDBox>
        ));

    return (
        <MDBox
            width="100%"
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
            px={1.5}
        >
            <MDBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                color="primary"
                fontSize={size.sm}
                px={1.5}
            >
                &copy; {new Date().getFullYear()}, made with
                <MDBox fontSize={size.md} color="secondary" mb={-0.5} mx={0.25}>
                    <Icon color="inherit" fontSize="inherit">
                        favorite
                    </Icon>
                </MDBox>
                by
                <Link href={company?.href} target="_blank">
                    <MDTypography variant="button" fontWeight="medium">
                        &nbsp;{company?.name}&nbsp;
                    </MDTypography>
                </Link>
                for a better web.
            </MDBox>
            <MDBox
                component="ul"
                sx={({ breakpoints }) => ({
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    listStyle: "none",
                    mt: 3,
                    mb: 0,
                    p: 0,

                    [breakpoints.up("lg")]: {
                        mt: 0,
                    },
                })}
            >
                {renderLinks()}
            </MDBox>
        </MDBox>
    );
};

// Declaring default props for Footer
Footer.defaultProps = {
    company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    links: [
        { href: "https://www.creative-tim.com/", name: "Creative Tim" },
        { href: "https://www.creative-tim.com/presentation", name: "About Us" },
        { href: "https://www.creative-tim.com/blog", name: "Blog" },
        { href: "https://www.creative-tim.com/license", name: "License" },
    ],
};

export default Footer;
