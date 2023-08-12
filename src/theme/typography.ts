/**
 * The base typography styles.
 * You can add new typography style using this file.
 * You can customize the typography styles for the entire project using this file.
 */

import pxToRem from "./functions/pxToRem";
import palette from "src/theme/palette";

interface DisplayTypes {
    fontFamily: string;
    color: string;
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
}

interface Types {
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        textTransform: any;
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

const baseProperties = {
    fontFamily: "\"Poppins\", \"Helvetica\", \"Arial\", sans-serif",
    fontWeightLighter: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSizeXXS: pxToRem(10.4),
    fontSizeXS: pxToRem(12),
    fontSizeSM: pxToRem(14),
    fontSizeMD: pxToRem(16),
    fontSizeLG: pxToRem(18),
    fontSizeXL: pxToRem(20),
    fontSize2XL: pxToRem(24),
    fontSize3XL: pxToRem(30),
};

const baseHeadingProperties = (mode: "light" | "dark") => {
    const { dark, grey } = palette[mode];
    return ({
        fontFamily: baseProperties.fontFamily,
        color: mode === "light" ? dark.main : grey[200],
        fontWeight: baseProperties.fontWeightBold,
    });
};

const baseDisplayProperties = (mode: "light" | "dark") => {
    const { dark, grey } = palette[mode];
    return ({
        fontFamily: baseProperties.fontFamily,
        color: mode === "light" ? dark.main : grey[200],
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.2,
    });
};

const createTypography = (mode: "light" | "dark"): Types => ({
    fontFamily: baseProperties.fontFamily,
    fontWeightLighter: baseProperties.fontWeightLighter,
    fontWeightLight: baseProperties.fontWeightLight,
    fontWeightRegular: baseProperties.fontWeightRegular,
    fontWeightMedium: baseProperties.fontWeightMedium,
    fontWeightBold: baseProperties.fontWeightBold,

    h1: {
        fontSize: pxToRem(40),
        lineHeight: 1.25,
        ...baseHeadingProperties(mode),
    },

    h2: {
        fontSize: pxToRem(32),
        lineHeight: 1.3,
        ...baseHeadingProperties(mode),
    },

    h3: {
        fontSize: pxToRem(26),
        lineHeight: 1.375,
        ...baseHeadingProperties(mode),
    },

    h4: {
        fontSize: pxToRem(20),
        lineHeight: 1.375,
        ...baseHeadingProperties(mode),
    },

    h5: {
        fontSize: pxToRem(18),
        lineHeight: 1.375,
        ...baseHeadingProperties(mode),
    },

    h6: {
        fontSize: pxToRem(16),
        lineHeight: 1.625,
        ...baseHeadingProperties(mode),
    },

    subtitle1: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeLG,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.625,
    },

    subtitle2: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeSM,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.6,
    },

    body1: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeSM,
        fontWeight: baseProperties.fontWeightRegular,
        lineHeight: 1.625,
    },

    body2: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXS,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.6,
    },

    button: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXS,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.5,
        textTransform: "uppercase",
    },

    caption: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXXS,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.25,
    },

    overline: {
        fontFamily: baseProperties.fontFamily,
    },

    d1: {
        fontSize: pxToRem(72),
        ...baseDisplayProperties(mode),
    },

    d2: {
        fontSize: pxToRem(64),
        ...baseDisplayProperties(mode),
    },

    d3: {
        fontSize: pxToRem(56),
        ...baseDisplayProperties(mode),
    },

    d4: {
        fontSize: pxToRem(48),
        ...baseDisplayProperties(mode),
    },

    d5: {
        fontSize: pxToRem(40),
        ...baseDisplayProperties(mode),
    },

    d6: {
        fontSize: pxToRem(32),
        ...baseDisplayProperties(mode),
    },

    size: {
        xxs: baseProperties.fontSizeXXS,
        xs: baseProperties.fontSizeXS,
        sm: baseProperties.fontSizeSM,
        md: baseProperties.fontSizeMD,
        lg: baseProperties.fontSizeLG,
        xl: baseProperties.fontSizeXL,
        "2xl": baseProperties.fontSize2XL,
        "3xl": baseProperties.fontSize3XL,
    },

    lineHeight: {
        sm: 1.25,
        md: 1.5,
        lg: 2,
    },
});

const typography: { light: Types, dark: Types } = {
    light: createTypography("light"),
    dark: createTypography("dark")
};

export default typography;
