import { ReactNode, useEffect } from "react";

import { useLocation } from "react-router-dom";

import MDBox from "src/mui-components/MDBox";

import { setLayout, useMaterialUIController } from "src/context";

interface PageLayoutProps {
    background?: "white" | "light";
    children: ReactNode;
}

const PageLayout = ({ background, children }: PageLayoutProps) => {
    const [, dispatch] = useMaterialUIController();
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, "page");
    }, [dispatch, pathname]);

    return (
        <MDBox
            width="100vw"
            height="100%"
            minHeight="100vh"
            bgColor={background}
            sx={{ overflowX: "hidden" }}
        >
            {children}
        </MDBox>
    );
};

// Declaring default props for PageLayout
PageLayout.defaultProps = {
    background: "default",
};

export default PageLayout;
