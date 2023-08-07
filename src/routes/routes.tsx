/**
 All routes are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Sidenav.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `type` key with the `collapse` value is used for a route.
 2. The `type` key with the `title` value is used for a title inside the Sidenav.
 3. The `type` key with the `divider` value is used for a divider between Sidenav items.
 4. The `name` key is used for the name of the route on the Sidenav.
 5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
 6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
 7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 8. The `route` key is used to store the route location which is used for the react router.
 9. The `href` key is used to store the external links location.
 10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
 10. The `component` key is used to store the component of its route.
 */

import SignInBasic from "src/pages/SignInPage";
import MDAvatar from "src/mui-components/MDAvatar";
import profilePicture from "src/assets/images/team-3.jpg";
import Icon from "@mui/material/Icon";
import CustomerPage from "src/pages/CustomerPage.tsx";
import CustomerPageAlt from "src/pages/CustomerPageAlt.tsx";
import SearchPageAlt from "src/pages/SearchPageAlt.tsx";

const routes = [
    {
        type: "collapse",
        name: "Brooklyn Alice",
        key: "brooklyn-alice",
        icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm"/>,
        collapse: [
            {
                name: "Log out",
                key: "logout",
                route: "/auth/sign-in",
                component: <SignInBasic/>,
            },
        ],
    },
    { type: "divider", key: "divider-0" },
    { type: "title", title: "Pages", key: "title-pages" },
    {
        type: "collapse",
        name: "Search Page",
        key: "searchPage",
        component: <CustomerPageAlt/>,
        route: "search",
        icon: <Icon fontSize="medium">receipt_long</Icon>,
        noCollapse: true
    },
    {
        type: "collapse",
        name: "Search Page Idea 2",
        key: "searchPageAlt",
        component: <SearchPageAlt/>,
        route: "search-alt",
        icon: <Icon fontSize="medium">receipt_long</Icon>,
        noCollapse: true
    },
    {
        type: "collapse",
        name: "Dashboard idea 1",
        key: "dash1",
        component: <CustomerPage/>,
        route: "/customers/1",
        icon: <Icon fontSize="medium">receipt_long</Icon>,
        noCollapse: true
    },
    {
        type: "collapse",
        name: "Dashboard idea 2",
        key: "dash2",
        component: <CustomerPageAlt/>,
        route: "/customers/2",
        icon: <Icon fontSize="medium">receipt_long</Icon>,
        noCollapse: true
    }
];

export default routes;
