import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";

const BlogDetails = () => {
    const blog = useLoaderData()
    const { category, image, long_description, short_description, title, _id } = blog
    const { user } = useAuth()
    const [comments, setComments] = useState([])

    const handleComment = event => {
        event.preventDefault()
        const commentText = event.target.comment.value
        const name = user.displayName
        const profilePic = user.photoURL
        const comment = { name, profilePic, commentText }



        // add comment 
        axios.post('http://localhost:5000/add-comment', comment)
            .then(res => {
                console.log(res.data);
            })
    }


    // get comment data 
    useEffect(() => {
        axios.get('http://localhost:5000/all-comments')
            .then(res => {
                const data = res.data
                console.log(data);
                setComments(data)
            })
    }, [])



    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    {/* <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1> */}

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={image} alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-md text-blue-500 uppercase badge badge-outline">{category}</p>

                            <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                                {title}
                            </a>

                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                {short_description}
                            </p>

                            <p className="inline-block mt-2 text-blue-500 hover:text-blue-400">{long_description}</p>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* comments */}
            <div>
                {
                    comments.map(comment => <Comment
                        key={comment._id}
                        comment={comment}
                    ></Comment>)
                }
            </div>

            {/* add comment */}
            <div className="p-2 my-8">
                <form onSubmit={handleComment}>
                    <label className="block text-xl" htmlFor="">Leave a comment</label>

                    <textarea className="textarea w-full bg-slate-600 text-white mt-3 text-nowrap resize-none" rows={3} placeholder="Write Your Comment here" name="comment"></textarea>
                    <div className="justify-between flex mt-1">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                        <button className="btn-primary btn form-control">Comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogDetails;