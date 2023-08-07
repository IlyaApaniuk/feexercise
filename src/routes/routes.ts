import { lazy } from "react";

const App = lazy(() => import("../components/App"));
const NewPage = lazy(() => import("../components/NewPage/NewPage"));

const routes = [
    {
        path: "/*",
        component: NewPage
    },
    {
        path: "/app/*",
        component: App
    }
];

export default routes;
