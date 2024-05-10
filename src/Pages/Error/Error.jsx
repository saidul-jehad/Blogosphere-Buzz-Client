import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="relative">
            <img className="w-full h-screen" src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" alt="" />

            <Link to='/' className="absolute top-[80%] right-[50%] bg-green-400 hover:bg-green-600 text-white px-3 py-1 rounded-lg"> Go to Home</Link>
        </div>
    );
};

export default Error;