
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import 'animate.css';


const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { category, image, short_description, title, _id, displayTime } = blog
    const wBlogs = {
        image: blog.image,
        long_description: blog.long_description,
        category: blog.category,
        short_description: blog.short_description,
        title: blog.title, _id,
        bloggerEmail: blog.bloggerEmail,
        bloggerName: blog.bloggerName,
        bloggerProfilePic: blog.bloggerProfilePic,
        timeStamp: blog.timeStamp,
        displayTime: blog.displayTime
    }
    const id = _id
    const userEmail = user?.email
    const wishlist = { id, userEmail, ...wBlogs }


    const handleAddWishlist = () => {
        if (!user) {
            return navigate('/login')
        }
        axios.post('https://blogosphere-buzz-server.vercel.app/add-wishlist', wishlist)
            .then(res => {
                const data = res.data
                if (data.insertedId) {
                    toast.success("Wishlist successfully added")
                }
            })
            .catch(err => {
                toast.error(err.response.data)
            })
    }


    return (
        <div className="card card-compact bg-base-100 shadow-xl border animate__animated animate__pulse">
            <div className="p-4 relative">
                <figure><img className="w-full rounded-xl" src={image} alt="Blog Image" /></figure>
                <p className=" badge badge-success  text-white absolute top-[9%] left-5">{category}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <p className="mt-4"><span className="mr-2 mt">Posted Time :</span>{displayTime}</p>

                <div className="card-actions justify-end mt-6">
                    <Link to={`/blog/${_id}`}><button className="btn btn-outline btn-accent">Show Details</button></Link>
                    <button onClick={handleAddWishlist} className="btn btn-outline btn-accent">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;