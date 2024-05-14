import { Outlet } from "react-router-dom";
import Navbar from "../Sheared/Navbar/Navbar";
import Footer from "../Sheared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;