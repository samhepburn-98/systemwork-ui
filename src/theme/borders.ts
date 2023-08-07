import palette from "./palette";

import pxToRem from "./functions/pxToRem";
import rgba from "./functions/rgba";

interface Types {
    borderColor: string;
    borderWidth: {
        0: number;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    borderRadius: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        section: string;
    };
}

const createBorders = (mode: "light" | "dark"): Types => {
    const { white, grey } = palette[mode];

    const borderColor = mode === "light" ? grey[300] : white.main ;

    return ({
        borderColor: rgba(borderColor, 0.4),

        borderWidth: {
            0: 0,
            1: pxToRem(1),
            2: pxToRem(2),
            3: pxToRem(3),
            4: pxToRem(4),
            5: pxToRem(5),
        },

        borderRadius: {
            xs: pxToRem(1.6),
            sm: pxToRem(2),
            md: pxToRem(6),
            lg: pxToRem(8),
            xl: pxToRem(12),
            xxl: pxToRem(16),
            section: pxToRem(160),
        },
    });
};

const borders: { light: Types, dark: Types } = {
    light: createBorders("light"),
    dark: createBorders("dark")
};

export default borders;
