import { createContext, FC, forwardRef, ReactNode, useContext, useMemo } from "react";

import MDBox from "src/mui-components/MDBox";

import MDPaginationItemRoot from "src/mui-components/MDPagination/MDPaginationItemRoot";

const Context = createContext<{
    variant: "gradient" | "contained",
    color?:
        | "white"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
        | "light"
        | "dark";
    size?: "small" | "medium" | "large";
} | null>(null);

interface MDPaginationProps {
    item?: boolean;
    variant?: "gradient" | "contained";
    color?:
        | "white"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
        | "light"
        | "dark";
    size?: "small" | "medium" | "large";
    active?: boolean;
    children: ReactNode;

    [key: string]: unknown;
}

const MDPagination: FC<MDPaginationProps> = forwardRef(
    (
        {
            item = false,
            variant = "gradient",
            color = "info",
            size = "medium",
            active = false,
            children,
            ...rest
        },
        ref
    ) => {
        const context = useContext(Context);
        const paginationSize = context ? context.size : undefined;

        const providerValue = useMemo(
            () => ({
                variant,
                color,
                size,
            }),
            [variant, color, size]
        );

        return (
            <Context.Provider value={providerValue}>
                {item ? (
                    <MDPaginationItemRoot
                        {...rest}
                        ref={ref}
                        variant={active ? context?.variant : "outlined"}
                        color={active ? context?.color : "secondary"}
                        iconOnly
                        circular
                        ownerState={{ variant, active, paginationSize }}
                    >
                        {children}
                    </MDPaginationItemRoot>
                ) : (
                    <MDBox
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        sx={{ listStyle: "none" }}
                    >
                        {children}
                    </MDBox>
                )}
            </Context.Provider>
        );
    }
);

export default MDPagination;
