import { createBrowserRouter, Navigate } from "react-router-dom";
import SignInPage from "src/pages/SignInPage.tsx";
import App from "src/App.tsx";
import CustomerPageAlt from "src/pages/CustomerPage.tsx";
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
                    path: "customers/2",
                    element: (<CustomerPageAlt/>),
                },
                {
                    path: "search",
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
