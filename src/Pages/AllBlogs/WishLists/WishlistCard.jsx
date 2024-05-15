import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const WishlistCard = ({ wishlist, getWishlist }) => {
    const { category, image, short_description, title, _id } = wishlist

    const handleDelete = () => {
        axios.delete(`https://blogosphere-buzz-server.vercel.app/wishlist/${_id}`)
            .then(res => {
                const data = res.data
                if (data.deletedCount > 0) {
                    getWishlist()

                    toast.success("Remove Successfull !")
                }
            })
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl border flex-col md:flex-row">
            <div className="p-4 relative flex flex-col">
                <figure><img className="w-full lg:min-h-36 md:max-w-[300px] rounded-xl" src={image} alt="Blog Image" /></figure>
                <p className=" badge badge-success  text-white absolute top-[9%] left-5">{category}</p>
            </div>

            <div className="card-body">
                <h2 className="card-title font-playfair">{title}</h2>
                <p>{short_description}</p>

                <div className="card-actions justify-end mt-6">
                    <Link to={`/blog/${_id}`}><button className="btn btn-outline btn-sm btn-accent">Show Details</button></Link>
                    <button onClick={handleDelete} className="btn btn-outline btn-accent btn-sm">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;