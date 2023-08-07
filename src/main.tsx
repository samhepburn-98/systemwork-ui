import React from "react";
import ReactDOM from "react-dom/client";
import { MaterialUIControllerProvider } from "src/context";
import ThemeModeProvider from "src/theme/ThemeModeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "src/routes/page-routes.tsx";
import "regenerator-runtime";
import "@fontsource/poppins";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeModeProvider>
            <MaterialUIControllerProvider>
                <RouterProvider router={router}/>
            </MaterialUIControllerProvider>
        </ThemeModeProvider>
    </React.StrictMode>,
);
