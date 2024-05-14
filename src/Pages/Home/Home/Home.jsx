import Hero from "../Hero/Hero";
import NewsLetter from "../NewsLetter/NewsLetter";
import RecentBlogs from "../RecentBlogs.jsx/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <RecentBlogs></RecentBlogs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;