

const Comment = ({ comment }) => {
    const { commentText, name, profilePic, timeStamp, _id, displayTime } = comment

    return (
        <div className="flex mt-6 bg-slate-600 p-3 rounded-lg shadow-slate-50 shadow-sm">
            <img className="object-cover object-center w-10 h-10 rounded-full" src={profilePic} alt="" />

            <div className="mx-6">
                <div className="flex gap-3">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">{name}</h1>
                    <p className="text-sm text-gray-200">{displayTime}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2" >{commentText}</p>
            </div>
        </div >
    );
};

export default Comment;