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
    transparentNavbar: boolean;
    openConfigurator: boolean;
    layout: "dashboard" | "page";
}

interface ActionTypes {
    type:
        | "MINI_SIDENAV"
        | "TRANSPARENT_NAVBAR"
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
        case "TRANSPARENT_NAVBAR": {
            return { ...state, transparentNavbar: action.value };
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
        miniSidenav: true,
        transparentNavbar: true,
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
const setTransparentNavbar = (
    dispatch: (arg: { type: "TRANSPARENT_NAVBAR"; value: boolean }) => void,
    value: boolean
) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
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
    setTransparentNavbar,
    setOpenConfigurator,
    setLayout,
};
