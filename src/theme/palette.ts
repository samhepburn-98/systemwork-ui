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

interface Types {
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

const palette: { light: Types, dark: Types } = {
    light: {
        mode: "light",
        background: {
            default: "#f0f2f5",
        },

        text: {
            main: "#7b809a",
            focus: "#7b809a",
        },

        transparent: {
            main: "transparent",
        },

        white: {
            main: "#ffffff",
            focus: "#ffffff",
        },

        black: {
            light: "#000000",
            main: "#000000",
            focus: "#000000",
        },

        primary: {
            main: "#e91e63",
            focus: "#e91e63",
        },

        secondary: {
            main: "#7b809a",
            focus: "#8f93a9",
        },

        info: {
            main: "#1A73E8",
            focus: "#1662C4",
        },

        success: {
            main: "#4CAF50",
            focus: "#67bb6a",
        },

        warning: {
            main: "#fb8c00",
            focus: "#fc9d26",
        },

        error: {
            main: "#F44335",
            focus: "#f65f53",
        },

        light: {
            main: "#f0f2f5",
            focus: "#f0f2f5",
        },

        dark: {
            main: "#2F4454",
            focus: "#2c3c58",
        },

        grey: {
            100: "#f8f9fa",
            200: "#f0f2f5",
            300: "#dee2e6",
            400: "#ced4da",
            500: "#adb5bd",
            600: "#6c757d",
            700: "#495057",
            800: "#343a40",
            900: "#212529",
        },

        gradients: {
            primary: {
                main: "#EC407A",
                state: "#D81B60",
            },

            secondary: {
                main: "#747b8a",
                state: "#495361",
            },

            info: {
                main: "#49a3f1",
                state: "#1A73E8",
            },

            success: {
                main: "#66BB6A",
                state: "#43A047",
            },

            warning: {
                main: "#FFA726",
                state: "#FB8C00",
            },

            error: {
                main: "#EF5350",
                state: "#E53935",
            },

            light: {
                main: "#EBEFF4",
                state: "#CED4DA",
            },

            dark: {
                main: "#2F4454",
                state: "#21303b",
            },
        },

        socialMediaColors: {
            facebook: {
                main: "#3b5998",
                dark: "#344e86",
            },

            twitter: {
                main: "#55acee",
                dark: "#3ea1ec",
            },

            instagram: {
                main: "#125688",
                dark: "#0e456d",
            },

            linkedin: {
                main: "#0077b5",
                dark: "#00669c",
            },

            pinterest: {
                main: "#cc2127",
                dark: "#b21d22",
            },

            youtube: {
                main: "#e52d27",
                dark: "#d41f1a",
            },

            vimeo: {
                main: "#1ab7ea",
                dark: "#13a3d2",
            },

            slack: {
                main: "#3aaf85",
                dark: "#329874",
            },

            dribbble: {
                main: "#ea4c89",
                dark: "#e73177",
            },

            github: {
                main: "#24292e",
                dark: "#171a1d",
            },

            reddit: {
                main: "#ff4500",
                dark: "#e03d00",
            },

            tumblr: {
                main: "#35465c",
                dark: "#2a3749",
            },
        },

        badgeColors: {
            primary: {
                background: "#f8b3ca",
                text: "#cc084b",
            },

            secondary: {
                background: "#d7d9e1",
                text: "#6c757d",
            },

            info: {
                background: "#aecef7",
                text: "#095bc6",
            },

            success: {
                background: "#bce2be",
                text: "#339537",
            },

            warning: {
                background: "#ffd59f",
                text: "#c87000",
            },

            error: {
                background: "#fcd3d0",
                text: "#f61200",
            },

            light: {
                background: "#ffffff",
                text: "#c7d3de",
            },

            dark: {
                background: "#8097bf",
                text: "#1e2e4a",
            },
        },

        coloredShadows: {
            primary: "#e91e62",
            secondary: "#110e0e",
            info: "#00bbd4",
            success: "#4caf4f",
            warning: "#ff9900",
            error: "#f44336",
            light: "#adb5bd",
            dark: "#404040",
        },

        inputBorderColor: "#d2d6da",

        tabs: {
            indicator: { boxShadow: "#ddd" },
        },
    },
    dark: {
        mode: "dark",

        background: {
            default: "#1c2932",
            sidenav: "#2f4454",
            card: "#263643",
        },

        text: {
            main: "#ffffffcc",
            focus: "#ffffffcc",
        },

        transparent: {
            main: "transparent",
        },

        white: {
            main: "#ffffff",
            focus: "#ffffff",
        },

        black: {
            light: "#000000",
            main: "#000000",
            focus: "#000000",
        },

        primary: {
            main: "#e91e63",
            focus: "#e91e63",
        },

        secondary: {
            main: "#7b809a",
            focus: "#8f93a9",
        },

        info: {
            main: "#1A73E8",
            focus: "#1662C4",
        },

        success: {
            main: "#4CAF50",
            focus: "#67bb6a",
        },

        warning: {
            main: "#fb8c00",
            focus: "#fc9d26",
        },

        error: {
            main: "#F44335",
            focus: "#f65f53",
        },

        light: {
            main: "#f0f2f566",
            focus: "#f0f2f566",
        },

        dark: {
            main: "#344767",
            focus: "#2c3c58",
        },

        grey: {
            100: "#f8f9fa",
            200: "#f0f2f5",
            300: "#dee2e6",
            400: "#ced4da",
            500: "#adb5bd",
            600: "#6c757d",
            700: "#495057",
            800: "#343a40",
            900: "#212529",
        },

        gradients: {
            primary: {
                main: "#EC407A",
                state: "#D81B60",
            },

            secondary: {
                main: "#747b8a",
                state: "#495361",
            },

            info: {
                main: "#49a3f1",
                state: "#1A73E8",
            },

            success: {
                main: "#66BB6A",
                state: "#43A047",
            },

            warning: {
                main: "#FFA726",
                state: "#FB8C00",
            },

            error: {
                main: "#EF5350",
                state: "#E53935",
            },

            light: {
                main: "#EBEFF4",
                state: "#CED4DA",
            },

            dark: {
                main: "#323a54",
                state: "#21303b",
            },
        },

        socialMediaColors: {
            facebook: {
                main: "#3b5998",
                dark: "#344e86",
            },

            twitter: {
                main: "#55acee",
                dark: "#3ea1ec",
            },

            instagram: {
                main: "#125688",
                dark: "#0e456d",
            },

            linkedin: {
                main: "#0077b5",
                dark: "#00669c",
            },

            pinterest: {
                main: "#cc2127",
                dark: "#b21d22",
            },

            youtube: {
                main: "#e52d27",
                dark: "#d41f1a",
            },

            vimeo: {
                main: "#1ab7ea",
                dark: "#13a3d2",
            },

            slack: {
                main: "#3aaf85",
                dark: "#329874",
            },

            dribbble: {
                main: "#ea4c89",
                dark: "#e73177",
            },

            github: {
                main: "#24292e",
                dark: "#171a1d",
            },

            reddit: {
                main: "#ff4500",
                dark: "#e03d00",
            },

            tumblr: {
                main: "#35465c",
                dark: "#2a3749",
            },
        },

        badgeColors: {
            primary: {
                background: "#f8b3ca",
                text: "#cc084b",
            },

            secondary: {
                background: "#d7d9e1",
                text: "#6c757d",
            },

            info: {
                background: "#aecef7",
                text: "#095bc6",
            },

            success: {
                background: "#bce2be",
                text: "#339537",
            },

            warning: {
                background: "#ffd59f",
                text: "#c87000",
            },

            error: {
                background: "#fcd3d0",
                text: "#f61200",
            },

            light: {
                background: "#ffffff",
                text: "#c7d3de",
            },

            dark: {
                background: "#8097bf",
                text: "#1e2e4a",
            },
        },

        coloredShadows: {
            primary: "#e91e62",
            secondary: "#110e0e",
            info: "#00bbd4",
            success: "#4caf4f",
            warning: "#ff9900",
            error: "#f44336",
            light: "#adb5bd",
            dark: "#404040",
        },

        inputBorderColor: "#d2d6da",

        tabs: {
            indicator: { boxShadow: "#ddd" },
        },
    }
} as const;

export default palette;
