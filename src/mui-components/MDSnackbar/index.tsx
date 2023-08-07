import { ReactNode } from "react";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import { Palette, SnackbarProps } from "@mui/material";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";

import MDSnackbarIconRoot from "src/mui-components/MDSnackbar/MDSnackbarIconRoot";
import { useTheme } from "@mui/material/styles";

interface MDSnackbarProps extends SnackbarProps {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
    icon: ReactNode;
    title: string;
    dateTime: string;
    content: string;
    close: () => void;
    bgWhite?: boolean;

    [key: string]: unknown;
}

function MDSnackbar({
                        color = "info",
                        icon,
                        title,
                        dateTime,
                        content,
                        close,
                        bgWhite = false,
                        ...rest
                    }: MDSnackbarProps) {
    const theme = useTheme();
    const { palette } = theme;

    const darkMode = palette.mode === "dark";

    let titleColor: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light" | "inherit" | "white";
    let dateTimeColor: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light" | "inherit" | "white" | "text";
    let dividerColor: boolean;

    if (bgWhite) {
        titleColor = color;
        dateTimeColor = "dark";
        dividerColor = false;
    } else if (color === "light") {
        titleColor = darkMode ? "inherit" : "dark";
        dateTimeColor = darkMode ? "inherit" : "text";
        dividerColor = false;
    } else {
        titleColor = "white";
        dateTimeColor = "white";
        dividerColor = true;
    }

    return (
        <Snackbar
            TransitionComponent={Fade}
            autoHideDuration={5000}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            {...rest}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
                    <Icon fontSize="small">close</Icon>
                </IconButton>
            }
        >
            <MDBox
                variant={bgWhite ? "contained" : "gradient"}
                bgColor={bgWhite ? "white" : color}
                minWidth="21.875rem"
                maxWidth="100%"
                shadow="md"
                borderRadius="md"
                p={1}
                sx={{
                    backgroundColor: darkMode ? palette.background.card : palette[color].main || palette.white.main,
                }}
            >
                <MDBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="dark"
                    p={1.5}
                >
                    <MDBox display="flex" alignItems="center" lineHeight={0}>
                        <MDSnackbarIconRoot fontSize="small" ownerState={{ color, bgWhite }}>
                            {icon}
                        </MDSnackbarIconRoot>
                        <MDTypography
                            variant="button"
                            fontWeight="medium"
                            color={titleColor}
                            textGradient={bgWhite}
                        >
                            {title}
                        </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" lineHeight={0}>
                        <MDTypography variant="caption" color={dateTimeColor}>
                            {dateTime}
                        </MDTypography>
                        <Icon
                            sx={{
                                color: ({ palette: { dark, white } }) =>
                                    (bgWhite && !darkMode) || color === "light" ? dark.main : white.main,
                                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                                cursor: "pointer",
                                marginLeft: 2,
                                transform: "translateY(-1px)",
                            }}
                            onClick={close}
                        >
                            close
                        </Icon>
                    </MDBox>
                </MDBox>
                <Divider sx={{ margin: 0 }} light={dividerColor}/>
                <MDBox
                    p={1.5}
                    sx={{
                        fontSize: ({ typography: { size } }) => size.sm,
                        color: ({ palette }: {
                            palette: Palette
                        }) => {
                            let colorValue =
                                bgWhite || color === "light" ? palette.text.main : palette.white.main;

                            if (darkMode) {
                                colorValue = color === "light" ? "inherit" : palette.white.main;
                            }

                            return colorValue;
                        },
                    }}
                >
                    {content}
                </MDBox>
            </MDBox>
        </Snackbar>
    );
}

export default MDSnackbar;