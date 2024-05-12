import { FiSearch } from "react-icons/fi";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const AllBlogs = () => {

    // const loadedBlogs = useLoaderData()
    const [blogs, setBlogs] = useState([])
    const [category, setCAtegory] = useState('')
    // const { category: selectedCategoey } = useParams()
    // setBlogs(loadedBlogs)


    useEffect(() => {
        axios.get(category === "All" ? `http://localhost:5000/blogs` : `http://localhost:5000/blogs/${category}`)
            .then(res => {
                const data = res.data
                setBlogs(data)
            })
    }, [category])

    const handleFilter = (event) => {
        console.log(event.target.value);
        setCAtegory(event.target.value)
    }


    // console.log(blogs);
    return (
        <div>

            <div className="flex items-center gap-6 justify-center">
                <form className="flex flex-col">
                    <label htmlFor=""> Filter </label>
                    <select defaultValue="All" className=" select  input-bordered md:min-w-[215px] " name="category" onChange={handleFilter}>
                        <option value='All'>All</option>
                        <option value='Travel'>Travel</option>
                        <option value='Health'>Health</option>
                        <option value='Food'>Food</option>
                        <option value='Art'>Art</option>
                        {/* <option>React</option> */}
                    </select>
                </form>


                <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-300">Search By Title</label>

                    <div className="relative flex items-center mt-2">
                        <span className="absolute">

                            <FaSearch />
                        </span>
                        <input type="text" placeholder="5555555555554444" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

            </div>



            <h3>All Blogs {blogs?.length}</h3>

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