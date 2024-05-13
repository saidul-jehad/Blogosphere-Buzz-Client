
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import { useEffect } from "react";

const BlogCard = ({ blog }) => {
    const { user } = useAuth()
    const { category, image, long_description, short_description, title, _id, displayTime } = blog
    const id = _id
    const userEmail = user?.email
    const wishlist = { id, userEmail, ...blog}


    const handleAddWishlist = () => {
        axios.post('http://localhost:5000/add-wishlist', wishlist )
            .then(res => {
                const data = res.data
                console.log(data);
            })
    }


    return (
        <div className="card card-compact bg-base-100 shadow-xl border ">
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