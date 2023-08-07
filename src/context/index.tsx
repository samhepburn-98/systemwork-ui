/**
 This file is used for controlling the global states of the components,
 you can customize the states for the different components here.
 */

import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from "react";

// Main context
const MaterialUI = createContext<[StateTypes, Dispatch<ActionTypes>] | null>(null);

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

interface StateTypes {
    miniSidenav: boolean;
    transparentSidenav: boolean;
    whiteSidenav: boolean;
    sidenavColor:
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
        | "light"
        | "dark";
    transparentNavbar: boolean;
    fixedNavbar: boolean;
    openConfigurator: boolean;
    layout: "dashboard" | "page";
}

interface ActionTypes {
    type:
        | "MINI_SIDENAV"
        | "TRANSPARENT_SIDENAV"
        | "WHITE_SIDENAV"
        | "SIDENAV_COLOR"
        | "TRANSPARENT_NAVBAR"
        | "FIXED_NAVBAR"
        | "OPEN_CONFIGURATOR"
        | "LAYOUT";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
}

const reducer = (state: StateTypes, action: ActionTypes): StateTypes => {
    switch (action.type) {
        case "MINI_SIDENAV": {
            return { ...state, miniSidenav: action.value };
        }
        case "TRANSPARENT_SIDENAV": {
            return { ...state, transparentSidenav: action.value };
        }
        case "WHITE_SIDENAV": {
            return { ...state, whiteSidenav: action.value };
        }
        case "SIDENAV_COLOR": {
            return { ...state, sidenavColor: action.value };
        }
        case "TRANSPARENT_NAVBAR": {
            return { ...state, transparentNavbar: action.value };
        }
        case "FIXED_NAVBAR": {
            return { ...state, fixedNavbar: action.value };
        }
        case "OPEN_CONFIGURATOR": {
            return { ...state, openConfigurator: action.value };
        }
        case "LAYOUT": {
            return { ...state, layout: action.value };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const MaterialUIControllerProvider = ({ children }: { children: ReactNode }) => {
    const initialState: StateTypes = {
        miniSidenav: false,
        transparentSidenav: false,
        whiteSidenav: false,
        sidenavColor: "info",
        transparentNavbar: true,
        fixedNavbar: true,
        openConfigurator: false,
        layout: "dashboard",
    };

    const [controller, dispatch]: [StateTypes, Dispatch<ActionTypes>] = useReducer(reducer, initialState);

    const value: [StateTypes, Dispatch<ActionTypes>] = useMemo(() => [controller, dispatch], [controller, dispatch]);

    return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
};

const useMaterialUIController = () => {
    const context = useContext(MaterialUI);

    if (!context) {
        throw new Error(
            "useMaterialUIController should be used inside the MaterialUIControllerProvider."
        );
    }

    return context;
};

// Context module functions
const setMiniSidenav = (
    dispatch: (arg: { type: "MINI_SIDENAV"; value: boolean }) => void,
    value: boolean
) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (
    dispatch: (arg: { type: "TRANSPARENT_SIDENAV"; value: boolean }) => void,
    value: boolean
) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (
    dispatch: (arg: { type: "WHITE_SIDENAV"; value: boolean }) => void,
    value: boolean
) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (
    dispatch: (arg: {
        type: "SIDENAV_COLOR";
        value: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    }) => void,
    value: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark"
) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (
    dispatch: (arg: { type: "TRANSPARENT_NAVBAR"; value: boolean }) => void,
    value: boolean
) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (
    dispatch: (arg: { type: "FIXED_NAVBAR"; value: boolean }) => void,
    value: boolean
) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (
    dispatch: (arg: { type: "OPEN_CONFIGURATOR"; value: boolean }) => void,
    value: boolean
) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setLayout = (
    dispatch: (arg: { type: "LAYOUT"; value: "dashboard" | "page" }) => void,
    value: "dashboard" | "page"
) => dispatch({ type: "LAYOUT", value });

export {
    MaterialUIControllerProvider,
    useMaterialUIController,
    setMiniSidenav,
    setTransparentSidenav,
    setWhiteSidenav,
    setSidenavColor,
    setTransparentNavbar,
    setFixedNavbar,
    setOpenConfigurator,
    setLayout,
};
