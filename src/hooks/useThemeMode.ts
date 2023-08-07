import { useContext } from "react";

import { ThemeModeContext } from "../theme/ThemeModeProvider";

const useThemeMode = () => useContext(ThemeModeContext);

export default useThemeMode;

// Usage:
// const { themeMode, onToggleThemeMode } = useThemeMode();
