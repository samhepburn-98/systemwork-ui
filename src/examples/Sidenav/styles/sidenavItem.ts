import { Theme } from "@mui/material/styles";

interface ItemProps {
    active: string | boolean;
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
}

const item = (theme: Theme, { active, color }: ItemProps) => {
    const { palette, borders, functions, transitions } = theme;

    const { transparent, white } = palette;
    const { borderRadius } = borders;
    const { rgba } = functions;

    return {
        pl: 3,
        mt: 0.375,
        mb: 0.3,
        width: "100%",
        borderRadius: borderRadius.md,
        cursor: "pointer",
        backgroundColor: () => {
            let backgroundValue = transparent.main;

            if (active === "isParent") {
                backgroundValue = rgba(white.main, 0.2);
            } else if (active) {
                backgroundValue = palette[color].main;
            }

            return backgroundValue;
        },
        transition: transitions.create("background-color", {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.shorter,
        }),

        "&:hover, &:focus": {
            backgroundColor:
                !active &&
                rgba(white.main, 0.2),
        },
    };
};

interface ItemContentProps {
    active: string | boolean;
    miniSidenav: boolean;
    name: string;
    open?: boolean;
    nested?: boolean;
}

const itemContent = (theme: Theme, { miniSidenav, name, active }: ItemContentProps) => {
    const { palette, typography, transitions, functions } = theme;

    const { white } = palette;
    const { size, fontWeightRegular, fontWeightLight } = typography;
    const { pxToRem } = functions;

    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: `${pxToRem(12)} ${pxToRem(16)}`,
        marginLeft: pxToRem(18),
        userSelect: "none",
        position: "relative",

        "& span": {
            color: white.main,
            fontWeight: active ? fontWeightRegular : fontWeightLight,
            fontSize: size.sm,
            opacity: miniSidenav ? 0 : 1,
            transition: transitions.create(["opacity", "color"], {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard,
            }),
        },

        "&::before": {
            content: `"${name[0]}"`,
            color: white.main,
            fontWeight: fontWeightRegular,
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: pxToRem(-15),
            opacity: 1,
            borderRadius: "50%",
            fontSize: size.sm,
        },
    };
};

interface ItemArrowProps {
    noCollapse?: boolean;
    active?: string | boolean;
    miniSidenav: boolean;
    open: boolean;
}

const itemArrow = (theme: Theme, { noCollapse, miniSidenav, open, active }: ItemArrowProps) => {
    const { palette, typography, transitions, breakpoints, functions } = theme;

    const { white } = palette;
    const { size } = typography;
    const { pxToRem, rgba } = functions;

    return {
        fontSize: `${size.lg} !important`,
        fontWeight: 700,
        marginBottom: pxToRem(-1),
        transform: open ? "rotate(0)" : "rotate(-180deg)",
        color: () => {
            return open || active ? white.main : rgba(white.main, 0.5);
        },
        transition: transitions.create(["color", "transform", "opacity"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.shorter,
        }),

        [breakpoints.up("xl")]: {
            display:
                noCollapse || miniSidenav
                    ? "none !important"
                    : "block !important",
        },
    };
};

export { item, itemContent, itemArrow };
