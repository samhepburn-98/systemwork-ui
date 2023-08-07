/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from "@mui/material/styles";

interface ColorsTypes {
    main: string;
    focus: string;
}

interface GradientsTypes {
    main: string;
    state: string;
}

interface SocialMediaColorsTypes {
    main: string;
    dark: string;
}

interface BadgeColorsTypes {
    background: string;
    text: string;
}

interface DisplayTypes {
    fontFamily: string;
    color: string;
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
}

declare module "@mui/material/styles" {
    interface TypeBackground {
        default: string;
        sidenav?: string;
        card?: string;
    }

    interface TypeText {
        main: string;
        focus: string;
        primary?: string;
        secondary?: string;
        disabled?: string;
    }

    interface PaletteColor {
        main: string;
        focus: string;
    }

    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }

        interface Theme {
        boxShadows: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            inset: string;
            colored: {
                primary: string;
                secondary: string;
                info: string;
                success: string;
                warning: string;
                error: string;
                light: string;
                dark: string;
            };
            navbarBoxShadow: string;
            sliderBoxShadow: {
                thumb: string;
            };
            tabsBoxShadow: {
                indicator: string;
            };
        };
        borders: {
            borderColor: string;
            borderWidth: {
                [key: number | string]: number | string;
            };
            borderRadius: {
                [key: number | string]: number | string;
            };
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        functions: any;
    }

    interface ThemeOptions {
        boxShadows: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            inset: string;
            colored: {
                primary: string;
                secondary: string;
                info: string;
                success: string;
                warning: string;
                error: string;
                light: string;
                dark: string;
            };
            navbarBoxShadow: string;
            sliderBoxShadow: {
                thumb: string;
            };
            tabsBoxShadow: {
                indicator: string;
            };
        };
        borders: {
            borderColor: string;
            borderWidth: {
                [key: number | string]: number | string;
            };
            borderRadius: {
                [key: number | string]: number | string;
            };
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        functions: any;
    }

    interface Palette {
        mode: "light" | "dark";
        background: {
            default: string;
            sidenav: string;
            card: string;
        };
        white: {
            main: string;
            focus: string;
        };
        text: {
            main: string;
            focus: string;
            primary?: string;
            secondary?: string;
            disabled?: string;
        };
        transparent: {
            main: string;
        };
        black: {
            light: string;
            main: string;
            focus: string;
        };
        primary: ColorsTypes;
        secondary: ColorsTypes;
        info: ColorsTypes;
        success: ColorsTypes;
        warning: ColorsTypes;
        error: ColorsTypes;
        light: ColorsTypes;
        dark: ColorsTypes;
        grey: {
            [key: string | number]: string;
        };
        gradients: {
            primary: GradientsTypes;
            secondary: GradientsTypes;
            info: GradientsTypes;
            success: GradientsTypes;
            warning: GradientsTypes;
            error: GradientsTypes;
            light: GradientsTypes;
            dark: GradientsTypes;
        };
        socialMediaColors: {
            facebook: SocialMediaColorsTypes;
            twitter: SocialMediaColorsTypes;
            instagram: SocialMediaColorsTypes;
            linkedin: SocialMediaColorsTypes;
            pinterest: SocialMediaColorsTypes;
            youtube: SocialMediaColorsTypes;
            vimeo: SocialMediaColorsTypes;
            slack: SocialMediaColorsTypes;
            dribbble: SocialMediaColorsTypes;
            github: SocialMediaColorsTypes;
            reddit: SocialMediaColorsTypes;
            tumblr: SocialMediaColorsTypes;
        };
        badgeColors: {
            primary: BadgeColorsTypes;
            secondary: BadgeColorsTypes;
            info: BadgeColorsTypes;
            success: BadgeColorsTypes;
            warning: BadgeColorsTypes;
            error: BadgeColorsTypes;
            light: BadgeColorsTypes;
            dark: BadgeColorsTypes;
        };
        coloredShadows: {
            [key: string]: string;
        };
        inputBorderColor: string;
        tabs: {
            indicator:
                | {
                boxShadow: string;
            };
        };
    }

    interface PaletteOptions {
        mode: "light" | "dark";
        background: {
            default: string;
            sidenav?: string;
            card?: string;
        };
        white: {
            main: string;
            focus: string;
        };
        text: {
            main: string;
            focus: string;
            primary?: string;
            secondary?: string;
            disabled?: string;
        };
        transparent: {
            main: string;
        };
        black: {
            light: string;
            main: string;
            focus: string;
        };
        primary: ColorsTypes;
        secondary: ColorsTypes;
        info: ColorsTypes;
        success: ColorsTypes;
        warning: ColorsTypes;
        error: ColorsTypes;
        light: ColorsTypes;
        dark: ColorsTypes;
        grey: {
            [key: string | number]: string;
        };
        gradients: {
            primary: GradientsTypes;
            secondary: GradientsTypes;
            info: GradientsTypes;
            success: GradientsTypes;
            warning: GradientsTypes;
            error: GradientsTypes;
            light: GradientsTypes;
            dark: GradientsTypes;
        };
        socialMediaColors: {
            facebook: SocialMediaColorsTypes;
            twitter: SocialMediaColorsTypes;
            instagram: SocialMediaColorsTypes;
            linkedin: SocialMediaColorsTypes;
            pinterest: SocialMediaColorsTypes;
            youtube: SocialMediaColorsTypes;
            vimeo: SocialMediaColorsTypes;
            slack: SocialMediaColorsTypes;
            dribbble: SocialMediaColorsTypes;
            github: SocialMediaColorsTypes;
            reddit: SocialMediaColorsTypes;
            tumblr: SocialMediaColorsTypes;
        };
        badgeColors: {
            primary: BadgeColorsTypes;
            secondary: BadgeColorsTypes;
            info: BadgeColorsTypes;
            success: BadgeColorsTypes;
            warning: BadgeColorsTypes;
            error: BadgeColorsTypes;
            light: BadgeColorsTypes;
            dark: BadgeColorsTypes;
        };
        coloredShadows: {
            [key: string]: string;
        };
        inputBorderColor: string;
        tabs: {
            indicator: {
                boxShadow: string;
            };
        };
    }

    interface TypographyVariants {
        fontFamily: string;
        fontWeightLighter: number;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightBold: number;
        h1: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            color: string;
            lineHeight: number;
        };
        h2: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            color: string;
            lineHeight: number;
        };
        h3: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            color: string;
            lineHeight: number;
        };
        h4: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            color: string;
            lineHeight: number;
        };
        h5: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            color: string;
            lineHeight: number;
        };
        h6: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            color: string;
            lineHeight: number;
        };
        subtitle1: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
        };
        subtitle2: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
        };
        body1: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
        };
        body2: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
        };
        button: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
            textTransform: string;
        };
        caption: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
        };
        overline: {
            fontFamily: string;
        };
        d1: DisplayTypes;
        d2: DisplayTypes;
        d3: DisplayTypes;
        d4: DisplayTypes;
        d5: DisplayTypes;
        d6: DisplayTypes;
        size: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
        };
        lineHeight: {
            sm: number;
            md: number;
            lg: number;
        };
    }
}
