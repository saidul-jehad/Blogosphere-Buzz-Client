
import BlogCard from "../../AllBlogs/BlogCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



const RecentBlogs = () => {
    // const [blogs, setBlogs] = useState([])


    const { data: blogs = [], isLoading, } = useQuery({
        queryFn: () => getRecentBlogData(),
        queryKey: [''],
    })

    const getRecentBlogData = async () => {
        const { data } = await axios.get("https://blogosphere-buzz-server.vercel.app/recent-blog", { withCredentials: true })
        // console.log(data);
        return (data.slice(0, 6))
    }

    if (isLoading) return <div className="w-full flex justify-center">
        <span className="loading loading-infinity w-24"></span>
    </div>
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