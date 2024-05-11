
const Comment = ({ comment }) => {
    const { commentText, name, profilePic, } = comment
    return (
        <div className="flex items-center mt-6">
            <img className="object-cover object-center w-10 h-10 rounded-full" src={profilePic} alt="" />

            <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
            </div>
        </div>
    );
};

export default Comment;