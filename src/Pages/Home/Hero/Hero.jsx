
const Hero = () => {
    return (
        <div className="hero min-h-[500px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://media.istockphoto.com/id/1393551126/vector/phone-on-rgb-led-ring-light-on-tripod-on-table-smartphone-streams-video-in-internet-vlogging.jpg?s=612x612&w=0&k=20&c=mzE3dacLWiHGmtK8krgq8xz3LahVpuM5Y2xw9J9TmQY=" className="rounded-lg shadow-2xl flex-1" />
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">Welcome to Blogosphere Buzz!</h1>
                    <p className="py-6">Where Ideas Take Flight and Conversations Ignite! Dive into a World of Endless Exploration, where Every Click Unveils a New Story. Join the Buzz and Be Part of the Pulse of Online Discourse!</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;