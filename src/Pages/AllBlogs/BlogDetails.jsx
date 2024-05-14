import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import moment from "moment";
import toast from "react-hot-toast";

const BlogDetails = () => {
    const blog = useLoaderData()
    const { category, image, long_description, short_description, title, _id, bloggerEmail, bloggerName, bloggerProfilePic, timeStamp, displayTime } = blog
    const { user } = useAuth()
    const [comments, setComments] = useState([])


    // const time = timeStamp()




    const handleComment = event => {
        event.preventDefault()
        const commentText = event.target.comment.value
        const name = user.displayName
        const profilePic = user.photoURL
        const timeStamp = new Date()
        const displayTime = moment().format("DD MMMM, YYYY, h:mm A")
        const id = _id
        const comment = { name, profilePic, commentText, timeStamp, id, displayTime }
        if (commentText.length === 0) {
            console.log(commentText.length);
            return
        }

        if (user.email === bloggerEmail) {
            toast.error("Can not comment on own blog !")
            return
        }


        // add comment 
        axios.post('http://localhost:5000/add-comment', comment)
            .then(res => {
                console.log(res.data);
                commentData()
            })
    }

    const commentData = async () => {
        const { data } = await axios.get(`http://localhost:5000/comment/${_id}`)
        setComments(data)
    }

    // get comment data 
    useEffect(() => {
        commentData()
    }, [])



    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto relative">
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
                                <img className="object-cover object-center w-10 h-10 rounded-full" src={bloggerProfilePic} alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">{bloggerName}</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{displayTime}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="absolute right-4 bottom-5">
                        {
                            user?.email === bloggerEmail && <Link to={`/update-blog/${_id}`} className="btn btn-accent bg-black text-white btn-sm">Update</Link>
                        }
                    </div>
                </div>


            </div>

            {/* comments */}
            <div className="p-2 my-8">

                {
                    (comments.length > 0) && <h3 className="text-xl">Comments</h3>
                }

                {
                    comments?.map(comment => <Comment
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
                        <button className="btn-outline btn form-control btn-sm">Comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogDetails;