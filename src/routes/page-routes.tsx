import { createBrowserRouter, Navigate } from "react-router-dom";
import CustomerPage from "src/pages/CustomerPage.tsx";
import SignInPage from "src/pages/SignInPage.tsx";
import App from "src/App.tsx";
import CustomerPageAlt from "src/pages/CustomerPageAlt.tsx";
import SearchPage from "src/pages/SearchPage.tsx";
import SearchPageAlt from "src/pages/SearchPageAlt.tsx";

const router = createBrowserRouter([
        {
            path: "",
            element: <App/>,
            children: [
                {
                    path: "",
                    element: <Navigate to="auth/sign-in"/>
                },
                {
                    path: "auth/sign-in",
                    element: (<SignInPage/>),
                },
                {
                    path: "customers/1",
                    element: (<CustomerPage/>),
                },
                {
                    path: "customers/2",
                    element: (<CustomerPageAlt/>),
                },
                {
                    path: "search",
                    element: (<SearchPage/>),
                },
                {
                    path: "search-alt",
                    element: (<SearchPageAlt/>),
                },
            ]
        },
        {
            path: "*",
            children: [{ path: "*", element: <Navigate replace to={"auth/sign-in"}/> }]
        }
    ]
);

export default router;
