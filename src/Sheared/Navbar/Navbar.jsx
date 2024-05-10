import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth()

    // logout user 
    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result?.user
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    {
                        user ? <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div> : <Link to='/login'>Login</Link>
                    }
                    {
                        user && <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signUp'>SignUp</Link></li>
                            <li onClick={handleLogout}><a>Logout</a></li>

                        </ul>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;