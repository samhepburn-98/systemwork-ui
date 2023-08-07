import { createContext, ReactNode } from "react";

import useLocalStorage from "src/hooks/useLocalStorage";

type ThemeModeContextProps = {
    themeMode: "light" | "dark";
    onToggleThemeMode: VoidFunction;
};

const initialContextState: ThemeModeContextProps = {
    themeMode: "dark",
    onToggleThemeMode: () => {
    }
};

export const ThemeModeContext = createContext(initialContextState);

type ThemeModeProviderProps = {
    children: ReactNode;
};

const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
    const [themeMode, setThemeMode] = useLocalStorage("themeMode", "dark");
    const onToggleThemeMode = () => setThemeMode(themeMode === "light" ? "dark" : "light");

    return (
        <ThemeModeContext.Provider
            value={{
                themeMode,
                onToggleThemeMode
            }}
        >
            {children}
        </ThemeModeContext.Provider>
    );
};

export default ThemeModeProvider;
