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
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";



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
            },
            {
                path: '/add-blog',
                element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
            },
            {
                path: '/update-blog/:id',
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blogosphere-buzz-server.vercel.app/blog/${params.id}`)

            },
            {
                path: '/blog/:id',
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blogosphere-buzz-server.vercel.app/blog/${params.id}`)
            },

            {
                path: '/wishlist',
                element: <PrivateRoute><WishLists></WishLists></PrivateRoute>
            },
            {
                path: '/featured-blogs',
                element: <FeaturedBlogs></FeaturedBlogs>,
                loader: () => fetch('https://blogosphere-buzz-server.vercel.app/top-blogs')
            }
        ]
    },
]);

export default router;