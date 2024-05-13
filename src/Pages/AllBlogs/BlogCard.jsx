import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const { category, image, long_description, short_description, title, _id } = blog



    return (
        <div className="card card-compact bg-base-100 shadow-xl border ">
            <div className="p-4 relative">
                <figure><img className="w-full rounded-xl" src={image} alt="Blog Image" /></figure>
                <p className=" badge badge-success  text-white absolute top-[9%] left-5">{category}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>

                <div className="card-actions justify-end mt-6">
                    <Link to={`/blog/${_id}`}><button className="btn btn-outline btn-accent">Show Details</button></Link>
                    <Link to='/'> <button className="btn btn-outline btn-accent">Wishlist</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;