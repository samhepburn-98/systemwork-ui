import { ReactNode } from "react";

import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

import MDBox from "src/mui-components/MDBox";

import { collapseArrow, collapseIcon, collapseIconBox, collapseItem, collapseText, } from "./styles/sidenavCollapse";

import { useMaterialUIController } from "src/context";
import { Theme, useTheme } from "@mui/material/styles";

interface SidenavCollapseProps {
    icon: ReactNode;
    name: string;
    children?: ReactNode;
    active?: boolean;
    noCollapse?: boolean;
    open?: boolean;

    [key: string]: unknown;
}

const SidenavCollapse = ({
                             icon,
                             name,
                             active = false,
                             noCollapse = false,
                             children = false,
                             open = false,
                             ...rest
                         }: SidenavCollapseProps) => {

    const [controller] = useMaterialUIController();
    const { miniSidenav } = controller;
    const transparentSidenav = false;
    const whiteSidenav = false;

    const theme = useTheme();
    const darkMode = theme.palette.mode === "dark";

    return (
        <>
            <ListItem component="li">
                <MDBox
                    {...rest}
                    sx={(theme: Theme) =>
                        collapseItem(theme, { active, transparentSidenav, whiteSidenav, darkMode })
                    }
                >
                    <ListItemIcon
                        sx={(theme) => collapseIconBox(theme, { transparentSidenav, whiteSidenav, darkMode })}
                    >
                        {typeof icon === "string" ? (
                            <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
                        ) : (
                            icon
                        )}
                    </ListItemIcon>

                    <ListItemText
                        primary={name}
                        sx={(theme) =>
                            collapseText(theme, {
                                miniSidenav,
                                transparentSidenav,
                                whiteSidenav,
                                active,
                            })
                        }
                    />

                    <Icon
                        sx={(theme) =>
                            collapseArrow(theme, {
                                noCollapse,
                                transparentSidenav,
                                whiteSidenav,
                                miniSidenav,
                                open,
                                active,
                                darkMode,
                            })
                        }
                    >
                        expand_less
                    </Icon>
                </MDBox>
            </ListItem>
            {children && (
                <Collapse in={Boolean(open)} unmountOnExit>
                    {children}
                </Collapse>
            )}
        </>
    );
};

export default SidenavCollapse;
