import { ReactNode } from "react";

import List from "@mui/material/List";

const SidenavList = ({ children }: { children: ReactNode }) => {
    return (
        <List
            sx={{
                px: 2,
                my: 0.3,
            }}
        >
            {children}
        </List>
    );
};

export default SidenavList;
