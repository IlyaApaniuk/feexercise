import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/context";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import routesMapper from "./routes/routesMapper";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <Suspense>{routesMapper(routes)}</Suspense>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
