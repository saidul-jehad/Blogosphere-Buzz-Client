
import { useLoaderData } from 'react-router-dom';
import FeaturedBlogTable from './FeaturedBlogTable';

const FeaturedBlogs = () => {
    const blogs = useLoaderData()
    // console.log(blogs);
    return (
        <div className="overflow-x-auto md:w-[70%] mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        blogs?.map((blog, idx) => <FeaturedBlogTable
                            key={blog._id}
                            blog={blog}
                            idx={idx}
                        ></FeaturedBlogTable>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default FeaturedBlogs;