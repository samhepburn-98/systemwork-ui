import { ReactNode, useState } from "react";

import Fade from "@mui/material/Fade";
import MDBox from "src/mui-components/MDBox";

import MDAlertRoot from "src/mui-components/MDAlert/MDAlertRoot";
import MDAlertCloseIcon from "src/mui-components/MDAlert/MDAlertCloseIcon";
import Element = React.JSX.Element;

interface MDAlertProps {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    dismissible?: boolean;
    children: ReactNode;

    [key: string]: unknown;
}

const MDAlert = ({
                     color = "info",
                     dismissible = false,
                     children,
                     ...rest
                 }: MDAlertProps): Element | null => {
    const [alertStatus, setAlertStatus] = useState("mount");

    const handleAlertStatus = () => setAlertStatus("fadeOut");

    // The base template for the alert
    const alertTemplate: any = (mount: boolean = true) => (
        <Fade in={mount} timeout={300}>
            <MDAlertRoot ownerState={{ color }} {...rest}>
                <MDBox display="flex" alignItems="center" color="white">
                    {children}
                </MDBox>
                {dismissible ? (
                    <MDAlertCloseIcon onClick={mount ? handleAlertStatus : undefined}>
                        &times;
                    </MDAlertCloseIcon>
                ) : null}
            </MDAlertRoot>
        </Fade>
    );

    switch (true) {
        case alertStatus === "mount":
            return alertTemplate();
        case alertStatus === "fadeOut":
            setTimeout(() => setAlertStatus("unmount"), 400);
            return alertTemplate(false);
        default:
            alertTemplate();
            break;
    }

    return null;
};

export default MDAlert;
