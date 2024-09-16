import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    AddPost,
    AllPosts,
    EditPost,
    Home,
    LoginPage,
    Post,
    Signup,
} from "./pages";
import { Protected } from "./components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <Protected authentication={false}>
                        <LoginPage />
                    </Protected>
                ),
            },
            {
                path: "/signup",
                element: (
                    <Protected authentication={false}>
                        <Signup />
                    </Protected>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <Protected authentication>
                        <AddPost />
                    </Protected>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <Protected authentication>
                        {" "}
                        <EditPost />
                    </Protected>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
            {
                path: "/all-posts",
                element: (
                    <Protected authentication>
                        <AllPosts />
                    </Protected>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
