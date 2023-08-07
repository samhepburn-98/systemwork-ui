import { PropsWithChildren, useMemo } from "react";
import { createTheme, CssBaseline, hexToRgb, ThemeProvider } from "@mui/material";

import useThemeMode from "src/hooks/useThemeMode";
import palette from "./palette";
import typography from "./typography";
import boxShadows from "./boxShadows";
import borders from "./borders";

import boxShadow from "src/theme/functions/boxShadow";
import linearGradient from "src/theme/functions/linearGradient";
import pxToRem from "src/theme/functions/pxToRem";
import rgba from "src/theme/functions/rgba";
import overrides from "src/theme/overrides";
import { ThemeOptions } from "@mui/material/styles";
import breakpoints from "src/theme/breakpoints.ts";

const MuiThemeProvider = ({ children }: PropsWithChildren) => {
    const { themeMode } = useThemeMode();
    const isLight = themeMode === "light";

    const themeOptions: ThemeOptions = useMemo(
        () => ({
            breakpoints: { ...breakpoints },
            boxShadows: isLight ? boxShadows.light : boxShadows.dark,
            borders: isLight ? borders.light : borders.dark,
            typography: isLight ? typography.light : typography.dark,
            palette: isLight ? palette.light : palette.dark,
            shape: { borderRadius: 4 },
            functions: {
                boxShadow,
                hexToRgb,
                linearGradient,
                pxToRem,
                rgba,
            },
        }),
        [isLight]
    );

    const theme = createTheme(themeOptions);

    theme.components = overrides(theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;
