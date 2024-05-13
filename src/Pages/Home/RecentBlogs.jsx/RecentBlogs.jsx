import { useEffect, useState } from "react";
import BlogCard from "../../AllBlogs/BlogCard";
import axios from "axios";


const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([])


    const getRecentBlogData = async () => {
        const { data } = await axios.get("http://localhost:5000/recent-blog")
        console.log(data);
        setBlogs(data.slice(0, 6))
    }

    useEffect(() => {
        getRecentBlogData()
    }, [])

    return (
        <div className="mt-8">
            <h3 className="text-center py-8 text-2xl"> Recently Posted Blogs</h3>

            {/* All Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    blogs?.map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;