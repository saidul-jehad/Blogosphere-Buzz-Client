import { Link } from "react-router-dom";

const FeaturedBlogTable = ({ blog, idx }) => {
    return (
        <tr>
            <td>
                {idx + 1}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={blog.bloggerProfilePic} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{blog.bloggerName}</td>
            <td className="w-60">{blog.title}</td>
            <th>
                <Link to={`/blog/${blog._id}`}><button className="btn btn-outline btn-accent btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default FeaturedBlogTable;