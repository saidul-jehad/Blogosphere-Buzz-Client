import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import AddBlog from "../Pages/AddBlog/AddBlog";
import BlogDetails from "../Pages/AllBlogs/BlogDetails";
import UpdateBlog from "../Pages/AllBlogs/UpdateBlog/UpdateBlog";
import PrivateRoute from "./PrivateRoute";
import WishLists from "../Pages/AllBlogs/WishLists/WishLists";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/all-blogs',
                element: <AllBlogs></AllBlogs>,
                // loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: '/add-blog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/update-blog/:id',
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)

            },
            {
                path: '/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
            },

            {
                path: '/wishlist',
                element: <WishLists></WishLists>
            }
        ]
    },
]);

export default router;