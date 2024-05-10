import { Outlet } from "react-router-dom";
import Navbar from "../Sheared/Navbar/Navbar";
import Footer from "../Sheared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;