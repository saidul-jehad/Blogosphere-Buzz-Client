import Lottie from "lottie-react";
import animation from './newsletterAnnimation.json'
import toast from "react-hot-toast";

const NewsLetter = () => {

    const handleSubscribe = () => {
        toast.success("Thank you for subscribing to our newsletter")
    }
    return (
        <div className="my-14">

            <div className="hero min-h-[500px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="rounded-lg shadow-2xl flex-1">

                        <Lottie animationData={animation} loop={true} />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold">Subscribe To Our Newsletter</h1>
                        <p className="py-6">Subscribe to our newsletter and stay up-to-date with the latest news, trends, and updates in [your niche or industry]. Receive exclusive content, special offers, and valuable insights delivered straight to your inbox. Do not miss out – join our community today and be part of the conversation!</p>

                        <div className="relative max-w-sm">
                            <input type="text" placeholder="Enter your email" className="input bg-slate-600 hover:outline-none hover:border-none w-full " />
                            <button onClick={handleSubscribe} className="flex items-center bg-yellow-500 py-2 text-white px-3 rounded-lg hover:bg-yellow-600 absolute top-1 right-0">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;