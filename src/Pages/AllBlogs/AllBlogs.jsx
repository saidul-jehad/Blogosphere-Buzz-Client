import { CiSearch } from "react-icons/ci";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBlogs = () => {

    // const loadedBlogs = useLoaderData()
    const [blogs, setBlogs] = useState([])
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState(null)
    // const { category: selectedCategoey } = useParams()
    // setBlogs(loadedBlogs)



    useEffect(() => {
        axios.get(search ? `https://blogosphere-buzz-server.vercel.app/blog-search/${search}` : category === "All" ? `https://blogosphere-buzz-server.vercel.app/blogs` : `https://blogosphere-buzz-server.vercel.app/blogs/${category}`, {withCredentials: true})
            .then(res => {
                const data = res.data

                setBlogs(data)
            })
    }, [category, search])

    const handleFilter = (event) => {
        event.preventDefault()
        setCategory(event.target.value)
        setSearch(null)
    }

    const handleSearch = event => {
        event.preventDefault()
        const form = event.target
        const search = form.search.value;
        setSearch(search)
    }






    // console.log(blogs);
    return (
        <div className="mt-8">

            <div className="flex items-center gap-6 justify-center">
                <form className="flex flex-col">
                    <label htmlFor=""> Filter </label>
                    <select defaultValue="All" className=" select dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 input-bordered md:min-w-[215px] " name="category" onChange={handleFilter}>
                        <option value='All'>All</option>
                        <option value='Travel'>Travel</option>
                        <option value='Health'>Health</option>
                        <option value='Food'>Food</option>
                        <option value='Art'>Art</option>
                        {/* <option>React</option> */}
                    </select>
                </form>


                <form className="" onSubmit={handleSearch}>
                    <label className="block">Search Blog</label>

                    <div className="relative flex items-center">
                        <span className="absolute left-3">
                            <CiSearch />
                        </span>
                        <input type="text" placeholder="Enter your blog name " className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="search" />
                        <button className="btn px-4 btn-outline btn-accent ml-3 form-control">Search</button>
                    </div>
                </form>

            </div>



            <h3 className="text-center py-8 text-xl">All Blogs here</h3>

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

export default AllBlogs;