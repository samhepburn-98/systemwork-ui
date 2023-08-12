import { ReactNode } from "react";

import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

import MDBox from "src/mui-components/MDBox";

import { item, itemArrow, itemContent } from "./styles/sidenavItem";

import { useMaterialUIController } from "src/context";

interface SidenavItemProps {
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
    name: string;
    active?: boolean | string;
    nested?: boolean;
    children?: ReactNode;
    open?: boolean;

    [key: string]: unknown;
}

const SidenavItem = ({
                         name,
                         color = "info",
                         active = false,
                         nested = false,
                         children = false,
                         open = false,
                         ...rest
                     }: SidenavItemProps) => {

    const [controller] = useMaterialUIController();
    const { miniSidenav } = controller;

    return (
        <>
            <ListItem
                {...rest}
                component="li"
                sx={(theme) => item(theme, { active, color })}
            >
                <MDBox
                    sx={(theme: Theme) =>
                        itemContent(theme, {
                            active,
                            miniSidenav,
                            name,
                            open,
                            nested
                        })
                    }
                >
                    <ListItemText primary={name}/>
                    {children && (
                        <Icon
                            component="i"
                            sx={(theme) =>
                                itemArrow(theme, { open, miniSidenav })
                            }
                        >
                            expand_less
                        </Icon>
                    )}
                </MDBox>
            </ListItem>
            {children && (
                <Collapse in={open} timeout="auto" unmountOnExit {...rest}>
                    {children}
                </Collapse>
            )}
        </>
    );
};

export default SidenavItem;

