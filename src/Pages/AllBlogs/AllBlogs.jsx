import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
    const blogs = useLoaderData()

    // console.log(blogs);
    return (
        <div>
            <h3>All Blogs {blogs?.length}</h3>

            {/* All Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    blogs.map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;