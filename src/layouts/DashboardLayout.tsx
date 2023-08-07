import { ReactNode, useEffect } from "react";

import { useLocation } from "react-router-dom";

import MDBox from "src/mui-components/MDBox";

import { setLayout, useMaterialUIController } from "src/context";

function DashboardLayout({ children }: { children: ReactNode }): JSX.Element {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav } = controller;
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, "dashboard");
    }, [dispatch, pathname]);

    return (
        <MDBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                p: 3,
                position: "relative",

                [breakpoints.up("xxl")]: {
                    marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
                    transition: transitions.create(["margin-left", "margin-right"], {
                        easing: transitions.easing.easeInOut,
                        duration: transitions.duration.standard,
                    }),
                },
            })}
        >
            {children}
        </MDBox>
    );
}

export default DashboardLayout;
